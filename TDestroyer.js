// Constants
// Used in question detection. 1 means question in the form must have the same words as those in the question database, 0 means no similarities.
// The script still uses the best match for the script, so this value doesn't hold as much value (haha, get it? ... sigh...).
let SENSITIVITY = 0.3;
// Delay for the program to start. Used because I don't want to implement after-page-is-ready loading, so it's a patchwork. 2s should be enough for most laggy devices.
let SCRIPT_START_DELAY = 2000;
// Visibility of the answer beside the question.
let ANSWER_COLOR = "#8484842e";

let q = [
    {
        "question": "Do modulacji kąta zalicza się modulacje",
        "incorrect-answers": [
            "AM",
            "ASK",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "PM",
            "FM"
        ]
    },
    {
        "question": "Ile bitów nadmiarowych zawiera kod Hamminga (15,11)?",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "11",
            "3",
            "7"
        ],
        "correct-answers": [
            "4"
        ]
    },
    {
        "question": "Wskaźnik modulacji sygnału FM określa:",
        "incorrect-answers": [
            "Różnicę między fazami sygnału zmodulowanego FM i PM",
            "Zmiany amplitudy sygnału nośnego",
            "Stosunek częstotliwości nośnej do częstotliwości modulującej",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Stosunek dewiacji częstotliwości do częstotliwości modulującej"
        ]
    },
    {
        "question": "Rolą współczynnika głębokości modulacji w modulacjach ciągłych jest:",
        "incorrect-answers": [
            "Uniezależnienie sygnału informacyjnego od sygnału nośnego",
            "Dodanie szumu do sygnału informacyjnego",
            "Zmniejszenie współczynnika mocy sygnału do szumu SNR",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Określenie wpływu sygnału informacyjnego na określony parametr sygnału nośnego"
        ]
    },
    {
        "question": "W procesie modulacji sygnału jest wykorzystywany sygnał:",
        "incorrect-answers": [
            "Błędu",
            "Piłokształtny",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Nośny",
            "Informacyjny"
        ]
    },
    {
        "question": "Przy konwersji analogowo-cyfrowej częstotliwość próbkowania:",
        "incorrect-answers": [
            "nie ma znaczenia w procesie konwersji"
        ],
        "correct-answers": [
            "ma wpływ na liczbę próbek w sygnale cyfrowym",
            "może być dziesięć razy większa od maksymalnej częstotliwości występującej w sygnale",
            "powinna być przynajmniej dwa razy większa niż maksymalna składowa częstotliwości sygnału źródłowego"
        ]
    },
    {
        "question": "Bilans mocy w łączu radiowym pozwala określić",
        "incorrect-answers": [
            "stosunek mocy sygnału na wejściu odbiornika do sygnału na jego wyjściu",
            "liczbę anten w odbiorniku potrzebną do skutecznej transmisji radiowej",
            "całkowitą liczbę elementów wprowadzających opóźnienie w transmisji",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "średni poziom mocy sygnału pojawiającego się na wejściu odbiornika"
        ]
    },
    {
        "question": "Rozdzielczość widmowa zależy od",
        "incorrect-answers": [
            "minimalnej częstotliwości w analizowanym sygnale",
            "od zmienności fazy sygnału źródłowego",
            "od największej wartości składowych w widmie amplitudowym",
            "różnicy między najwyższą i najniższą częstotliwością składowych występujących w widmie",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "od częstotliwości próbkowania sygnału źródłowego",
            "od liczby próbek sygnału",
            "liczby składowych w widmie"
        ]
    },
    {
        "question": "W miarę wzrostu liczby wiadomości, między którymi źródło dokonuje wyboru, entropia:",
        "incorrect-answers": [
            "Zależy od treści wiadomości",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Maleje",
            "Pozostaje bez zmian"
        ],
        "correct-answers": [
            "Rośnie"
        ]
    },
    {
        "question": "Do subiektywnych pięciostopniowych skal oceny jakości dźwięku należą skale:",
        "incorrect-answers": [
            "CQS",
            "CCR"
        ],
        "correct-answers": [
            "MOS",
            "ACR",
            "DCR"
        ]
    },
    {
        "question": "Protokół RTP oferuje:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Identyfikację źródła",
            "Transport danych",
            "Odtwarzanie czasu",
            "Tworzenie strumieni danych"
        ]
    },
    {
        "question": "Tłumienie fali elektromagnetycznej nie zależy od:",
        "incorrect-answers": [
            "warunków atmosferycznych",
            "ukształtowania terenu",
            "odległości między antenami"
        ],
        "correct-answers": [
            "liczby bitów"
        ]
    },
    {
        "question": "Modulacja polega na:",
        "incorrect-answers": [
            "dodaniu amplitudy sygnału nośnego do amplitudy sygnału informacyjnego",
            "wytłumieniu sygnału informacyjnego"
        ],
        "correct-answers": [
            "przesunięciu pasma sygnału do innego zakresu",
            "zmianie parametrów fali nośnej"
        ]
    },
    {
        "question": "Parametry określające pojemność kanału transmisyjnego to:",
        "incorrect-answers": [
            "moc sygnału i szumu, podwojona szerokość pasma oraz liczba przesyłanych bitów",
            "liczba bitów oraz suma szerokości pasma i maksymalnej częstotliwości sygnału",
            "maksymalna prędkość bitowa, szerokość pasma oraz SNR"
        ],
        "correct-answers": [
            "maksymalna prędkość bitowa, moc sygnału, szerokość pasma oraz moc szumu"
        ]
    },
    {
        "question": "W kodzie blokowym (n, k):",
        "incorrect-answers": [
            "n jest sumą bitów o wartości 1",
            "Żadna z odpowiedzi nie jest poprawna.",
            "k oznacza liczbę potęg liczby 2"
        ],
        "correct-answers": [
            "n jest całkowitą długością bloku",
            "k oznacza liczbę bitów informacyjnych"
        ]
    },
    {
        "question": "Pierwsza i ostatnia warstwa modelu OSI to:",
        "incorrect-answers": [
            "Warstwa transmisji danych i warstwa sesji",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Warstwa transportowa i warstwa prezentacji",
            "Warstwa transmisji danych i warstwa aplikacji"
        ],
        "correct-answers": [
            "Warstwa fizyczna i warstwa aplikacji"
        ]
    },
    {
        "question": "Do podstawowych technik multipleksacji kanałów transmisyjnych zaliczamy:",
        "incorrect-answers": [
            "HDM"
        ],
        "correct-answers": [
            "FDM",
            "TDM",
            "CDM"
        ]
    },
    {
        "question": "Fala elektromagnetyczna:",
        "incorrect-answers": [
            "rozchodzi się ze zmienną prędkością w wolnej przestrzeni"
        ],
        "correct-answers": [
            "składa się ze składowej elektrycznej i magnetycznej",
            "posiada właściwości zależne od częstotliwości",
            "stanowi medium w łączności radiowej"
        ]
    },
    {
        "question": "Kody liniowe stosuje się w celu",
        "incorrect-answers": [
            "zmniejszenia rozmiaru wiadomości",
            "poprawy charakterystyki liniowej kodu",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "poprawy właściwości synchronizacyjnych",
            "zniwelowania składowej stałej",
            "poprawy własności transmisyjnych"
        ]
    },
    {
        "question": "Dewiacją częstotliwości w modulacji FM jest",
        "incorrect-answers": [
            "stopień zmian częstotliwości w sygnale informacyjnym",
            "odchylenie częstotliwości fali nośnej w kolejnych chwilach czasu",
            "różnica częstotliwości w widmie sygnału zmodulowanego",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "maksymalne odchylenie częstotliwości chwilowej sygnału FM od częstotliwości nośnej"
        ]
    },
    {
        "question": "Kolejność orbit, na których satelita komunikacyjny przesyła sygnał z opóźnieniami od najmniejszego do największego to:",
        "incorrect-answers": [
            "HEO / GEO / MEO / LEO",
            "GEO / HEO / MEO / LEO",
            "MEO / GEO / LEO"
        ],
        "correct-answers": [
            "LEO / MEO / GEO"
        ]
    },
    {
        "question": "Kolejność warstw w modelu OSI jest następująca:",
        "incorrect-answers": [
            "fizyczna, transportowa, łącza danych, sieciowa, sesji, aplikacji, prezentacji",
            "transportowa, fizyczna, łącza danych, sieciowa sesji, prezentacji, aplikacji",
            "fizyczna, sieciowa, łącza danych, transportowa, sesji, prezentacji, aplikacji"
        ],
        "correct-answers": [
            "fizyczna, łącza danych, sieciowa, transportowa, sesji, prezentacji, aplikacji"
        ]
    },
    {
        "question": "Twierdzenie o próbkowaniu",
        "incorrect-answers": [
            "wykorzystuje ograniczony zbiór tonów prostych",
            "dotyczy zmian mocy w sygnale spróbkowanym",
            "określa wpływ częstotliwości próbkowania na zmiany opóźnień w sygnale spróbkowanym",
            "określa związek między częstotliwością i fazą w sygnale spróbkowanym",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "jest związane z szerokością pasma sygnału próbkowanego",
            "jest związane z maksymalną częstotliwością w sygnale.",
            "zakłada, że częstotliwość próbkowania powinna być przynajmniej dwa razy większa niż maksymalna częstotliwość w sygnale"
        ]
    },
    {
        "question": "Splot sygnałów w dziedzinie czasu odpowiada następującej operacji w dziedzinie częstotliwości:",
        "incorrect-answers": [
            "Dodawaniu",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Splotowi",
            "Odejmowaniu"
        ],
        "correct-answers": [
            "Mnożeniu"
        ]
    },
    {
        "question": "Kodek OPUS umożliwia:",
        "incorrect-answers": [
            "kompresję tylko sygnału mowy",
            "nie służy do kompresji sygnałów akustycznych",
            "jedynie kompresję sygnałów muzycznych"
        ],
        "correct-answers": [
            "kompresję zarówno mowy jak i muzyki"
        ]
    },
    {
        "question": "Do rodzajów zakłóceń powstających w kanale transmisyjnym należą:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Szumy",
            "Opóźnienie",
            "Tłumienie"
        ]
    },
    {
        "question": "Ile okien transmisyjnych wyróżnia się w transmisji światłowodowej?",
        "incorrect-answers": [
            "Cztery",
            "Jedno",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Dwa"
        ],
        "correct-answers": [
            "Trzy"
        ]
    },
    {
        "question": "Które z poniższych modulacji wykorzystują zmiany fazowe do reprezentowania symboli?",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "PSK",
            "BPSK",
            "QAM",
            "QPSK"
        ]
    },
    {
        "question": "Efektywność widmowa w modulacji cyfrowej zależy od:",
        "incorrect-answers": [
            "Częstotliwości sygnału",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Szerokości pasma",
            "Czasu trwania bitu",
            "Wartościowości modulacji"
        ]
    },
    {
        "question": "W modulatorze kwadraturowym wykorzystuje się:",
        "incorrect-answers": [
            "operacje pierwiastkowania i potęgowania",
            "dwa generatory sinusoidalne"
        ],
        "correct-answers": [
            "odwzorowanie konstelacji kodowej",
            "dekompozycje strumienia bitów na składowe I oraz Q",
            "operacje mnożenia i odejmowania"
        ]
    },
    {
        "question": "Jednostką pochodną do jednostki dBm jest",
        "incorrect-answers": [
            "dBi",
            "dbV",
            "dBA",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "dbW"
        ]
    },
    {
        "question": "Waga Hamminga oznacza:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Liczbę bitów o wartości 0 w słowie kodowym",
            "Stosunek liczby bitów o wartości 0 do liczby wszystkich bitów w słowie kodowym",
            "Różnicę liczby bitów o wartości 0 oraz 1 w słowie kodowym"
        ],
        "correct-answers": [
            "Liczbę bitów o wartości 1 w słowie kodowym"
        ]
    },
    {
        "question": "Przepływność binarna zależy od:",
        "incorrect-answers": [
            "Od liczby bitów",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Opóźnienia bitów"
        ],
        "correct-answers": [
            "Czasu trwania bitu",
            "Wartościowości modulacji"
        ]
    },
    {
        "question": "W procesie modulacji sygnału jest wykorzystywany sygnał:",
        "incorrect-answers": [
            "Błędu",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Prostokątny"
        ],
        "correct-answers": [
            "Informacyjny",
            "Nośny"
        ]
    },
    {
        "question": "Wartościowość kluczowania amplitudy, częstotliwości i fazy wynosi:",
        "incorrect-answers": [
            "1",
            "3",
            "4",
            "2",
            "7"
        ],
        "correct-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ]
    },
    {
        "question": "Protokoły nie związane z transmisją strumieniową w sieciach IP to",
        "incorrect-answers": [
            "TCP",
            "RTCP",
            "UDP",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "NTP"
        ]
    },
    {
        "question": "Przy modelowaniu sygnału akustycznego w procesie kodowania stratnego wykorzystuje się:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Pasma krytyczne",
            "Próg słyszalności",
            "Przestrzenność w sygnale stereofonicznym",
            "Maskowanie dźwięków"
        ]
    },
    {
        "question": "Szerokość pasma sygnału zmodulowanego AM jest zależna od:",
        "incorrect-answers": [
            "amplitudy fali nośnej",
            "szerokości pasma sygnału modulującego",
            "minimalnej częstotliwości sygnału nośnego"
        ],
        "correct-answers": [
            "maksymalnej częstotliwości sygnału informacyjnego"
        ]
    },
    {
        "question": "Na etapie kwantyzacji w procesie konwersji analogowo-cyfrowej, wraz ze wzrostem liczby poziomów kwantyzacji stosunek sygnału do szumu:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Pozostaje bez zmian",
            "Ma zawsze wartość poniżej 20 dB"
        ],
        "correct-answers": [
            "Wzrasta"
        ]
    },
    {
        "question": "W modulatorze kwadraturowym sygnał wejściowy podlega dekompozycji na",
        "incorrect-answers": [
            "składową nośną",
            "składową sinusoidalną",
            "składową kosinusoidalną",
            "dwa strumienie bitowe",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "składową synfazową",
            "składową kwadraturową"
        ]
    },
    {
        "question": "Jaki jest związek między częstotliwością (f) i okresem (T) sygnału:",
        "incorrect-answers": [
            "T = 2 * PI * f",
            "Żadna z odpowiedzi nie jest poprawna.",
            "f = 2T"
        ],
        "correct-answers": [
            "f = 1 / T",
            "T = 1 / f"
        ]
    },
    {
        "question": "Sygnał mowy /wytwarzany przez człowieka/ może zawierać",
        "incorrect-answers": [
            "przebieg piłokształtny",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "fragmenty głośne i ciche",
            "części dźwięczne i bezdźwięczne",
            "pauzy międzywyrazowe",
            "fragmenty o zmiennej energii",
            "tony proste"
        ]
    },
    {
        "question": "Do podstawowych protokołów ARQ zaliczamy:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "TNK"
        ],
        "correct-answers": [
            "SAW",
            "GBN",
            "SR"
        ]
    },
    {
        "question": "Pasmo prawidłowo spróbkowanego sygnału, przy założeniu, że fs jest częstotliwością próbkowania, wynosi:",
        "incorrect-answers": [
            "2*fs",
            "fs / 4",
            "fs",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "fs / 2"
        ]
    },
    {
        "question": "Proces modulacji:",
        "incorrect-answers": [
            "Wprowadza opóźnienie do sygnału wejściowego",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Ma wpływ na szerokość pasma sygnału zmodulowanego",
            "Wykorzystuje falę nośną do przesunięcia widma sygnału"
        ]
    },
    {
        "question": "Proces transmisji światłowodowej wykorzystuje efekt:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Zmiennej objętości w czasie",
            "Naskórkowości",
            "Dopplera"
        ],
        "correct-answers": [
            "Całkowitego wewnętrznego odbicia"
        ]
    },
    {
        "question": "Proces próbkowania polega na:",
        "incorrect-answers": [
            "Odczytywaniu wartości chwilowych sygnału w nieregularnych interwałach czasu",
            "Odfiltrowaniu niepotrzebnych składowych poniżej maksymalnej częstotliwości",
            "Odczytywaniu amplitudy sygnału i przypisywaniu do jednego z określonych przedziałów"
        ],
        "correct-answers": [
            "Pobieraniu w regularnych odstępach próbek sygnału w dziedzinie czasu"
        ]
    },
    {
        "question": "Do technik multipleksacji zaliczamy:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "LDM"
        ],
        "correct-answers": [
            "TDM",
            "FDM",
            "CDM"
        ]
    },
    {
        "question": "Protokoły w sieciach IP związane z transmisją strumieniową to",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "RTP",
            "RTSP",
            "RTCP",
            "UDP"
        ]
    },
    {
        "question": "Proces próbkowania sygnału",
        "incorrect-answers": [
            "wykorzystuje filtr dolnoprzepustowy",
            "może być realizowany w dziedzinie częstotliwości",
            "związany jest z kwantyzacją",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "jest jednym z etapów konwersji analogowo-cyfrowej",
            "wpływa na pasmo sygnału cyfrowego",
            "polega na odczytywaniu wartości chwilowej sygnału w określonych odstępach czasu"
        ]
    },
    {
        "question": "W procesie konwersji analogowo-cyfrowej wykorzystywane są następujące etapy:",
        "incorrect-answers": [
            "próbkowanie, kompresja, kodowanie źródłowe",
            "odszumianie, próbkowanie, kwantyzacja i kodowanie Hamminga",
            "rekonstrukcja sygnału, próbkowanie, kwantyzacja wektorowa",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "filtracja dolnoprzepustowa, próbkowanie, kwantyzacja, kodowanie"
        ]
    },
    {
        "question": "W procesie kwantyzacji:",
        "incorrect-answers": [
            "dzieli się sygnał w dziedzinie czasu na ramki o zmiennej długości",
            "do sygnału analogowego dodawane są kwanty innego sygnału"
        ],
        "correct-answers": [
            "dokonuje się dopasowania wartości próbek sygnału do ustalonych przedziałów",
            "liczba bitów na próbkę zależy od liczby poziomów kwantyzacji"
        ]
    },
    {
        "question": "W modelu OSI do warstw komunikacyjnych zalicza się:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Warstwę sieciową i transportową",
            "Warstwę aplikacji i prezentacji",
            "Warstwę sesji i prezentacji"
        ],
        "correct-answers": [
            "Warstwę fizyczną i łącza danych"
        ]
    },
    {
        "question": "Widmo sygnału jest",
        "incorrect-answers": [
            "reprezentacją sygnału w dziedzinie czasu",
            "reprezentacją sygnału w dziedzinie czasu i częstotliwości"
        ],
        "correct-answers": [
            "reprezentacją mogącą przedstawiać zależność między częstotliwością i amplitudą lub fazą",
            "reprezentacją w dziedzinie częstotliwości"
        ]
    },
    {
        "question": "Składowa synfazowa w modulatorze kwadraturowym:",
        "incorrect-answers": [
            "Moduluje składową sinusową",
            "Nie wpływa na żadną z tych składowych",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Moduluje składową sinusową i cosinusową"
        ],
        "correct-answers": [
            "Moduluje składową cosinusową"
        ]
    },
    {
        "question": "Kod liniowy, który posiada dobre właściwości synchronizacyjne i nie posiadaskładowej stałej to kod:",
        "incorrect-answers": [
            "NRZ",
            "Millera",
            "AMI"
        ],
        "correct-answers": [
            "Manchester"
        ]
    },
    {
        "question": "Efektywność widmowa zależy od",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "czasu trwania bitu",
            "szerokości pasma zajmowanego przez sygnał zmodulowany",
            "przepływności binarnej",
            "wartościowości modulacji"
        ]
    },
    {
        "question": "Orbita, na której satelita komunikacyjny przesyła sygnał z najmniejszym opóźnieniem:",
        "incorrect-answers": [
            "HEO",
            "GEO",
            "MEO"
        ],
        "correct-answers": [
            "LEO"
        ]
    },
    {
        "question": "Protokół RTCP służy do:",
        "incorrect-answers": [
            "Numerowania pakietów",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Usuwania pakietów opóźnionych"
        ],
        "correct-answers": [
            "Zarządzania i identyfikacji strumieni danych",
            "Nadzoru nad jakością połączenia"
        ]
    },
    {
        "question": "Pasmo ISM określa",
        "incorrect-answers": [
            "pasmo w którym można nadawać mocą około 1KW",
            "pasmo, które obecnie jest przestarzałe i nieużywane",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "pasmo nielicencjonowane",
            "pasmo do zastosowań przemyśle, badaniach naukowych oraz w systemach medycznych"
        ]
    },
    {
        "question": "Pojemność kanału transmisyjnego wzrasta, gdy",
        "incorrect-answers": [
            "maleje stosunek sygnału do szumu",
            "rośnie częstotliwość i faza sygnału",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "rośnie stosunek mocy sygnału do mocy szumu",
            "rośnie szerokość pasma"
        ]
    },
    {
        "question": "Podstawowe etapy w procesie konwersji analogowo-cyfrowej to:",
        "incorrect-answers": [
            "Odszumianie",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Próbkowanie",
            "Kodowanie",
            "Kwantyzacja"
        ]
    },
    {
        "question": "Fala elektromagnetyczna:",
        "incorrect-answers": [
            "Nie występuje przy częstotliwościach większych niż 10GHz",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Posiada właściwości, które są zależne od częstotliwości",
            "Posiada składową elektryczną i magnetyczną",
            "Może być widoczna"
        ]
    },
    {
        "question": "Szerokość pasma Idealnego przebiegu trójkątnego wynosi",
        "incorrect-answers": [
            "1Hz",
            "1000Hz",
            "1MHz",
            "0.01 GHZ"
        ],
        "correct-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ]
    },
    {
        "question": "Do technik multipleksacji zaliczamy:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "TDM",
            "WDM",
            "CDM",
            "FDM"
        ]
    },
    {
        "question": "Cechą charakterystyczną w kodowaniu różnicowym ze stałym krokiem jest występowanie:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Obszaru zawierającego sygnał sinusoidalny",
            "Obszaru ciszy"
        ],
        "correct-answers": [
            "Obszaru ziarnistego",
            "Obszaru przeciążenia zbocza"
        ]
    },
    {
        "question": "W kodowaniu Huffmana dane poddawane kompresji są reprezentowane po kompresji jako",
        "incorrect-answers": [
            "zbiór danych reprezentowany przez 2 liczby zmiennoprzecinkowe",
            "liczba reprezentująca podprzedział przedziału jednostkowego",
            "wektor liczb zespolonych",
            "zestaw liczb o przeciwnych znakach"
        ],
        "correct-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ]
    },
    {
        "question": "W klasycznej modulacji AM, szerokość pasma sygnału zmodulowanego jest:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Taka sama jak sygnału informacyjnego",
            "Połowę mniejsza niż sygnału informacyjnego",
            "Tyle razy większa, ile wynosi współczynnik głębokości modulacji"
        ],
        "correct-answers": [
            "Dwa razy większa niż sygnału informacyjnego"
        ]
    },
    {
        "question": "W parze skręcanej niesymetrycznej:",
        "incorrect-answers": [
            "przez obie żyły przesyłany jest ten sam sygnał",
            "w obu żyłach występuje to samo napięcie, ale ma przeciwną polaryzację",
            "w jednej żyle jest napięcie stałe, w drugiej impulsy o stałej szerokości"
        ],
        "correct-answers": [
            "jedna żyła jest przeznaczona do transmisji sygnału, druga jest Żyłą odniesienia"
        ]
    },
    {
        "question": "Moduł VAD w kodekach mowy służy do",
        "incorrect-answers": [
            "Przesyłania sygnału mowy",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Odszumiania sygnału mowy"
        ],
        "correct-answers": [
            "Wykrywania sygnału mowy"
        ]
    },
    {
        "question": "Szerokość pasma sygnału postaci x(t)=sin(2*pi*200*t)+sin(40*pi*t)+2*cos(640*pi*t) wynosi",
        "incorrect-answers": [
            "240Hz",
            "600Hz",
            "440Hz",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "300Hz"
        ]
    },
    {
        "question": "Wartościowość modulacji QPSK wynosi",
        "incorrect-answers": [
            "2",
            "8",
            "16",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "4"
        ]
    },
    {
        "question": "Przy transmisji światłowodowej wykorzystywane jest zjawisko:",
        "incorrect-answers": [
            "tłumienia światła",
            "przyspieszania światła"
        ],
        "correct-answers": [
            "odbicia i załamania światła",
            "zjawisko całkowitego wewnętrznego odbicia"
        ]
    },
    {
        "question": "Fala elektromagnetyczna:",
        "incorrect-answers": [
            "Posiada właściwości, które nie są zależne od częstotliwości",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Nie występuje przy częstotliwościach większych niż 2 GHz"
        ],
        "correct-answers": [
            "Może być widoczna",
            "Posiada składową elektryczną i magnetyczną"
        ]
    },
    {
        "question": "Które z poniższych zdań są prawdziwe?",
        "incorrect-answers": [
            "Pulsacja jest 2*pi razy większa niż okres."
        ],
        "correct-answers": [
            "Pulsacja jest 2*pi razy większa niż częstotliwość.",
            "Częstotliwość jest odwrotnością okresu.",
            "Iloczyn pulsacji i okresu jest równy 2*pi."
        ]
    },
    {
        "question": "Do podstawowych technik multipleksacji kanałów transmisyjnych zaliczamy:",
        "incorrect-answers": [
            "HDM"
        ],
        "correct-answers": [
            "FDM",
            "TDM",
            "CDM"
        ]
    },
    {
        "question": "Kodowanie predykcyjne polega na",
        "incorrect-answers": [
            "zmniejszaniu rozmiaru sygnału",
            "nadpróbkowaniu sygnału wejściowego",
            "zmniejszaniu wartości pomiędzy sąsiednimi próbkami",
            "redukcji szumu w sygnale kodowanym",
            "zastępowaniu większej liczby bitów wektorem o mniejszym rozmiarze",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "na przewidywaniu zmian w sygnale źródłowym",
            "występują błędy predykcji"
        ]
    },
    {
        "question": "Wartościowość modulacji ASK wynosi:",
        "incorrect-answers": [
            "1"
        ],
        "correct-answers": [
            "8",
            "4",
            "2",
            "16"
        ]
    },
    {
        "question": "Do podstawowych zakłóceń w kanale telekomunikacyjnym zaliczamy:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "tłumienie",
            "echo",
            "opóźnienie",
            "szumy"
        ]
    },
    {
        "question": "Podstawowe etapy w procesie konwersji analogowo-cyfrowej to:",
        "incorrect-answers": [
            "Odszumianie",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Próbkowanie",
            "Kodowanie",
            "Kwantyzacja"
        ]
    },
    {
        "question": "Współczynnik głębokości modulacji",
        "incorrect-answers": [
            "wpływa na zmianę głębokości sygnału informacyjnego",
            "opisuje oddziaływanie fali nośnej na widmo sygnału zmodulowanego",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "ma wpływ na widmo sygnału zmodulowanego",
            "określa stopień oddziaływania na falę nośną"
        ]
    },
    {
        "question": "Współczynnik głębokości modulacji określa",
        "incorrect-answers": [
            "zmianę głębokości sygnału informacyjnego",
            "oddziaływanie fali nośnej na widmo sygnału zmodulowanego",
            "stopień zniekształcenia sygnału informacyjnego przez proces modulacji",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "stopień oddziaływania sygnału informacyjnego na falę nośną"
        ]
    },
    {
        "question": "W modulacji FSK sygnałem informacyjnym jest:",
        "incorrect-answers": [
            "przebieg sinusoidalny",
            "sygnał analogowy",
            "sygnał zawierający dwie częstotliwości"
        ],
        "correct-answers": [
            "ciąg bitów"
        ]
    },
    {
        "question": "Rolą współczynnika głębokości modulacji w modulacjach ciągłych jest:",
        "incorrect-answers": [
            "Dodanie szumu do sygnału informacyjnego",
            "Uniezależnienie sygnału informacyjnego od sygnału nośnego",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Zmniejszenie współczynnika mocy sygnału do szumu SNR"
        ],
        "correct-answers": [
            "Określenie wpływu sygnału informacyjnego na określony parametr sygnału nośnego"
        ]
    },
    {
        "question": "Konstelacja kodowa:",
        "incorrect-answers": [
            "opisuje zmiany amplitudy i fazy w sygnale zmodulowanym",
            "wpływa na sygnał informacyjny"
        ],
        "correct-answers": [
            "określa punkty charakterystyczne modulacji",
            "może kodowanie Graya"
        ]
    },
    {
        "question": "Warstwa znajdująca się najbliżej powierzchni Ziemi to:",
        "incorrect-answers": [
            "Stratosfera",
            "Jonosfera",
            "Mezosfera"
        ],
        "correct-answers": [
            "Troposfera"
        ]
    },
    {
        "question": "Tłumienie w wolnej przestrzeni zależy od:",
        "incorrect-answers": [
            "Liczby nadajników i odbiorników",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Prędkości rozchodzenia się fali",
            "Częstotliwości propagującej się fali",
            "Odległości między antenami"
        ]
    },
    {
        "question": "Podobieństwa między przekształceniem DFT i FFT są następujące:",
        "incorrect-answers": [
            "Kwantyzacja wektorów wynikowych",
            "Oba wykorzystują filtrację górno-przepustową",
            "Wszystkie elementy wektora wyjściowego zawsze sumują się do wartości 1",
            "Zerowanie wartości w wektorze wejściowym"
        ],
        "correct-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ]
    },
    {
        "question": "Do podstawowych torów światła w światłowodzie zalicza się:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Fazowy",
            "Stopniowy"
        ],
        "correct-answers": [
            "Jednomodowy",
            "Wielomodowy"
        ]
    },
    {
        "question": "Operacja przesunięcia w dziedzinie częstotliwości dotyczy",
        "incorrect-answers": [
            "mocy sygnału",
            "skalowania",
            "wzmocnienia",
            "opóźnienia",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "modulacji"
        ]
    },
    {
        "question": "Przepływność binarna zależy od",
        "incorrect-answers": [
            "mocy sygnału",
            "częstotliwości nośnej",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "czasu trwania bitu",
            "wartościowości modulacji"
        ]
    },
    {
        "question": "W kodowaniu arytmetycznym dane poddawane kompresji są reprezentowane po kompresji jako",
        "incorrect-answers": [
            "zbiór danych reprezentowany przez bajty",
            "wektor liczb zespolonych",
            "zestaw liczb o przeciwnych znakach",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "liczba reprezentująca podprzedział przedziału jednostkowego"
        ]
    },
    {
        "question": "Skrambling polega na",
        "incorrect-answers": [
            "retransmisji danych",
            "zwiększenia szybkości transmisji",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "redukcji okresowości w ciągu bitowym",
            "rozpraszaniu błędów transmisyjnych"
        ]
    },
    {
        "question": "Skrambling służy do:",
        "incorrect-answers": [
            "Wzmacniania sygnału",
            "Redukcji opóźnień w sygnale",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Redukcji długich ciągów zer i jedynek",
            "Randomizacji strumienia binarnego"
        ]
    },
    {
        "question": "Podstawowe parametry charakteryzujące warunki do zapewnienia jakości usług w sieciach pakietowych, to",
        "incorrect-answers": [
            "liczba bajtów w pakiecie",
            "liczba węzłów w sieci",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "opóźnienie",
            "poziom utraty pakietów",
            "zmienność opóźnienia"
        ]
    },
    {
        "question": "Częstotliwość tonu prostego można obliczyć na podstawie jego",
        "incorrect-answers": [
            "amplitudy",
            "fazy",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "okresu",
            "pulsacji"
        ]
    },
    {
        "question": "Technika ARQ wykorzystywana jest do",
        "incorrect-answers": [
            "poprawy parametrów transmitowanego sygnału",
            "zmniejszenia rozmiaru sygnału",
            "zwiększenia szybkości transmisji",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "retransmisji danych"
        ]
    },
    {
        "question": "Cechą charakterystyczną kodu Graya jest",
        "incorrect-answers": [
            "jednobitowa reprezentacja",
            "podobieństwo do kodu różnicowego",
            "zmniejszenie liczby bitów w wynikowym strumieniu",
            "powielanie liczby bitów",
            "słowa bitowe różniące się parami bitów",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "słowa bitowe różniące się jednym bitem"
        ]
    },
    {
        "question": "Wartościowość modulacji FSK wynosi:",
        "incorrect-answers": [
            "6",
            "4",
            "3",
            "1"
        ],
        "correct-answers": [
            "2"
        ]
    },
    {
        "question": "Widmo amplitudowe jest reprezentacją:",
        "incorrect-answers": [
            "Zmian faz w funkcji częstotliwości",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Zmian amplitud w funkcji zmian fazy",
            "Zmian amplitud w funkcji czasu"
        ],
        "correct-answers": [
            "Zmian amplitud w funkcji częstotliwości"
        ]
    },
    {
        "question": "W modulacji PPM:",
        "incorrect-answers": [
            "dokonuje się podwójnej modulacji PSK",
            "nie wykorzystuje się impulsów"
        ],
        "correct-answers": [
            "może być wykorzystany sygnał PAM",
            "jest modulacją położenia impulsów"
        ]
    },
    {
        "question": "Odległość Hamminga między dwoma ciągami bitowymi oznacza:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Liczbę pozycji na których występują bity o wartości 0",
            "Różnicę między dwoma ciągami zamienionymi na format dziesiętny",
            "Sumę wszystkich bitów o wartości 1 w obu ciągach"
        ],
        "correct-answers": [
            "Liczbę pozycji, na których te ciągi różnią się"
        ]
    },
    {
        "question": "Ton prosty nie jest sygnałem:",
        "incorrect-answers": [
            "sinusoidalnym"
        ],
        "correct-answers": [
            "trójkątnym",
            "szumem białym",
            "piłokształtnym"
        ]
    },
    {
        "question": "Jednostka dBm określa:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Moc sygnału względem 1W",
            "Napięcie względem 1V",
            "Zysk anteny w stosunku do anteny izotropowej"
        ],
        "correct-answers": [
            "Moc sygnału względem 1mW"
        ]
    },
    {
        "question": "Moduł CNG w kodekach mowy służy do:",
        "incorrect-answers": [
            "Generowania mowy",
            "Dopasowywania przepływności",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Generowania szumu"
        ]
    },
    {
        "question": "W symetrycznej parze skręcanej",
        "incorrect-answers": [
            "występują dwa napięcia o przeciwnej fazie",
            "symetria określa zależność między dwoma różnymi napięciami",
            "dane przekazywane są jedną żyłą, a druga stanowi oplot",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "występuje takie samo napięcie, ale ma przeciwną polaryzację"
        ]
    },
    {
        "question": "Zakładając, że sygnał stanowi sumę dwóch tonów prostych o pulsacjach 400π oraz 1200π, prawidłowa częstotliwość próbkowania takiego sygnału może wynosić:",
        "incorrect-answers": [
            "200 Hz",
            "Żadna z odpowiedzi nie jest poprawna.",
            "600 Hz"
        ],
        "correct-answers": [
            "1400 Hz",
            "2400 Hz"
        ]
    },
    {
        "question": "Jednostka dBi oznacza",
        "incorrect-answers": [
            "zysk anteny w stosunku do impedancji",
            "stratę w stosunku do iloczynu mocy wejściowej i wyjściowej",
            "ogólny zysk energetyczny wszystkich anten w systemie",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "zysk energetyczny anteny w stosunku do anteny izotropowej"
        ]
    },
    {
        "question": "Profil światłowodu określa",
        "incorrect-answers": [
            "trajektorię promieniowania świetlnego",
            "kolor użytego światła",
            "minimalną liczbę trajektorii światła",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "zmianę współczynnika załamania światła wzdłuż przekroju włókna"
        ]
    },
    {
        "question": "Szum kwantyzacji powstaje:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Ze względu na poprzedzający etap próbkowania",
            "Przez zastosowanie filtra dolnoprzepustowego"
        ],
        "correct-answers": [
            "W wyniku różnic pomiędzy wartościami rzeczywistymi i skwantowanymi"
        ]
    },
    {
        "question": "Pojemność kanału transmisyjnego zależy od",
        "incorrect-answers": [
            "częstotliwości nośnej",
            "liczby bitów w sygnale",
            "zmian fazowych podczas transmisji",
            "redukcji szerokości pasma"
        ],
        "correct-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ]
    },
    {
        "question": "Widmo amplitudowe jest reprezentacją:",
        "incorrect-answers": [
            "Zmian amplitudy w funkcji zmian fazowych",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Zmian wysokości bitów",
            "W dziedzinie czasu"
        ],
        "correct-answers": [
            "Zmian faz składowych w funkcji częstotliwości"
        ]
    },
    {
        "question": "Wykorzystanie modulatora kwadraturowego wymaga użycia:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Sygnału wejściowego o zmiennej mocy",
            "Wprowadzania danych w blokach nie większych niż 4 bity"
        ],
        "correct-answers": [
            "Dekompozycji I/Q",
            "Ortogonalnych nośnych"
        ]
    },
    {
        "question": "Wartościowość modulacji BPSK wynosi",
        "incorrect-answers": [
            "4",
            "8",
            "16",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "2"
        ]
    },
    {
        "question": "Skręcenie par przewodów w tzw. \"skrętce\" służy do",
        "incorrect-answers": [
            "blokady sygnałów dużej mocy",
            "dopasowania kolorystycznego żył",
            "poprawy geometrii przewodu",
            "kompensacji energii",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "zmniejszenia wpływu zakłóceń elektromagnetycznych",
            "zmniejszenie zakłóceń wzajemnych"
        ]
    },
    {
        "question": "Do kodów liniowych zaliczamy kody",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Hamminga",
            "AMI",
            "NRZI",
            "Manchester"
        ]
    },
    {
        "question": "Do modulacji amplitudy zalicza się modulacje",
        "incorrect-answers": [
            "PSK",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "AM",
            "PAM",
            "ASK"
        ]
    },
    {
        "question": "Liniowe kodowanie transmisyjne ma wpływ na:",
        "incorrect-answers": [
            "Czas trwania sygnału",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Synchronizację",
            "Szerokość pasma",
            "Składową stałą"
        ]
    },
    {
        "question": "Liczba warstw modelu opisującego komunikację w sieci komputerowej wynosi",
        "incorrect-answers": [
            "8",
            "9",
            "6"
        ],
        "correct-answers": [
            "7"
        ]
    },
    {
        "question": "Mod propagacji w światłowodzie określa",
        "incorrect-answers": [
            "maksymalną liczbę trajektorii światła",
            "kolor użytego światła",
            "minimalną liczbę trajektorii światła",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "trajektorię promieniowania świetlnego"
        ]
    },
    {
        "question": "Szerokość pasma Idealnego przebiegu piłokształtnego",
        "incorrect-answers": [
            "jest większa niż idealnego przebiegu prostokątnego",
            "wynosi 44100Hz",
            "zależy od jego amplitudy",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "jest większa niż tonu prostego"
        ]
    },
    {
        "question": "Ile razy pulsacja jest większa od częstotliwości?",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "2",
            "π",
            "4"
        ],
        "correct-answers": [
            "2π"
        ]
    },
    {
        "question": "Multipleksacja CDM",
        "incorrect-answers": [
            "wymaga sygnału o jak najwęższym widmie",
            "wymaga pasm ochronnych",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "wykorzystuje kody pseudolosowe",
            "nie wymaga synchronizacji w czasie"
        ]
    },
    {
        "question": "Do rodzajów zakłóceń powstających w kanale transmisyjnym należą:",
        "incorrect-answers": [
            "Wzrost prędkości",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Szumy",
            "Tłumienie",
            "Opóźnienie"
        ]
    },
    {
        "question": "Odległość Hamminga to:",
        "incorrect-answers": [
            "liczba jedynek w słowie kodowym",
            "liczba bitów przypadająca na jeden bit informacyjny",
            "liczba zer w słowie kodowym"
        ],
        "correct-answers": [
            "liczba pozycji, na których różnią się dwa ciągi"
        ]
    },
    {
        "question": "Rozdzielczość widmowa zależy od:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna.",
            "Maksymalnej amplitudy sygnału wejściowego"
        ],
        "correct-answers": [
            "Okresu próbkowania sygnału wejściowego",
            "Liczby próbek wektora wejściowego"
        ]
    },
    {
        "question": "Tłumienie fali elektromagnetycznej zależy od:",
        "incorrect-answers": [
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "ukształtowania terenu",
            "częstotliwości fali",
            "odległości między antenami",
            "warunków atmosferycznych"
        ]
    },
    {
        "question": "Multipleksacja TDM",
        "incorrect-answers": [
            "nie wymaga synchronizacji w czasie",
            "wymaga sygnału o jak najwęższym widmie",
            "wymaga pasm ochronnych",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "polega na przydziale odpowiednich szczelin czasowych"
        ]
    },
    {
        "question": "Do kodowania entropijnego zaliczamy następujące techniki:",
        "incorrect-answers": [
            "kodowanie Hamminga",
            "nie istnieją takie techniki"
        ],
        "correct-answers": [
            "kodowanie arytmetyczne",
            "kodowanie Huffmana"
        ]
    },
    {
        "question": "Dewiacja częstotliwości stanowi:",
        "incorrect-answers": [
            "Różnicę między sąsiednimi prążkami w widmie",
            "Żadna z odpowiedzi nie jest poprawna.",
            "Częstotliwość nośną w modulacji FM",
            "Liczbę składowych w widmie sygnału zmodulowanego FM"
        ],
        "correct-answers": [
            "Maksymalne odchylenie częstotliwości chwilowej sygnału FM od częstotliwości nośnej"
        ]
    },
    {
        "question": "Częstotliwość próbkowania wpływa na:",
        "incorrect-answers": [
            "Opóźnienie próbek",
            "Amplitudę sygnału",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "Szerokość pasma sygnału spróbkowanego",
            "Liczbę próbek w jednostce czasu"
        ]
    },
    {
        "question": "W modelu AWGN szum dodawany do sygnału ma rozkład",
        "incorrect-answers": [
            "laplace'a",
            "równomierny",
            "gamma",
            "Żadna z odpowiedzi nie jest poprawna."
        ],
        "correct-answers": [
            "normalny"
        ]
    }
];
let checkArraySimilarity = (arr1,arr2) => {
    let score = 0;
    for(let a of arr1) {
        for(let b of arr2) {
            if(a.toLowerCase().replaceAll(/[^a-zA-Z0-9]+/gi," ").trim() == b.toLowerCase().replaceAll(/[^a-zA-Z0-9]+/gi," ").trim()) {
                score++;
                break;
            }
        }
    }
    score = score / (arr1.length > arr2.length ? arr1.length : arr2.length);
    return score;
};
// Webpage detection
let formSelector = "";
let questionSelector = "";
let insertedAnswerSelector = "";
switch(window.location.host) {
    case "forms.office.com": // MS Forms
        formSelector = "#question-list";
        questionSelector = ".text-format-content";
        insertedAnswerSelector = ".text-format-content";
        break;
    case "docs.google.com": // Google Forms
        formSelector = "#mG61Hd .o3Dpx";
        questionSelector = ".M7eMe";
        insertedAnswerSelector = ".M7eMe";
        break;
    default:
        console.error("[FAS] Cannot apply this script to the current page - it's not in the whitelist.");
        break;
}
let scriptStart = () => {
    let form = document.querySelector(formSelector);
    for(let i=0;i<form.children.length;i++) {
        // find question content and prepare it for searching within the database
        let question = form.children[i].querySelector(questionSelector).innerText.toLowerCase().replaceAll(/[^a-zA-Z0-9]+/gi," ").trim();
        // Prepare "best" answers with the best score. It's needed because checkArraySimilarity may return shit after finding correct answer, so it's a precaution.'
        let proposedAnswers = "";
        let bestScore = 0;
        // iterating through the database to find correct answer.
        for(let dbQuestion of q) {
            // If the question has better score than some constant, and it's better than current "best" one, replace it.
            let currScore = checkArraySimilarity(dbQuestion.question.toLowerCase().replaceAll(/[^a-zA-Z0-9]+/gi," ").trim().split(" "),question.split(" "));
            if(currScore > SENSITIVITY && currScore > bestScore) {
                bestScore = currScore;
                proposedAnswers = dbQuestion["correct-answers"].join(",&nbsp;");
            }
        }
        if(bestScore==0) {
            proposedAnswers="Nie znaleziono poprawnej odpowiedzi :\/";
        }

        // Apply the answer to the question title, with some transparency.
        form.children[i].querySelector(insertedAnswerSelector).innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;<small style='color:"+ANSWER_COLOR+"'>("+proposedAnswers+")</small>";
    }
}
setTimeout(scriptStart,SCRIPT_START_DELAY)
