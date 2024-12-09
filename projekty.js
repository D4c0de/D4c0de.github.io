let projectTab=[];
let mainContener=document.getElementById("main");
console.log(document.getElementById("main"));
class projekt{
    constructor(name,fName,tech,disc){
    this.projektName=name;
    this.fileName=fName;
    this.discription=disc;
    this.technology=tech;
    }
    retCode(){
        let code =`
        <tr id="top">
            <th colspan="2">
                ${this.projektName}
            <th>
        </tr>
        <tr>
            <td id="left">
                <img src="${this.fileName}" alt="Img not found">
            </td>
            <td id="right">
                <div id="topp">
                    ${this.discription}
                </div>
                <div id="bottom">
                    <p>Technologie: <br/>
                    ${this.technology}</p>
                </div>
            </td>
        </tr>`;
        return code;
    };
};
projectTab.push(new projekt("Spotify", "spotify.jpg", "C++, SQL, FTP ", `Odtwarzacz muzyki to aplikacja napisana w języku C++ z wykorzystaniem protokołu FTP i bazy danych SQL.
Umożliwia zarządzanie lokalną biblioteką muzyczną oraz pobieranie utworów z serwera FTP, a także przechowywanie informacji o utworach i playlistach w bazie danych SQL.
Dzięki temu aplikacja oferuje prostotę użytkowania przy jednoczesnym wsparciu dla dynamicznego zarządzania zawartością.
Projekt ten połączył moją pasję do muzyki z rozwijaniem umiejętności w pracy z protokołami sieciowymi i bazami danych, tworząc funkcjonalne rozwiązanie,`));

projectTab.push(new projekt("Koder huffmana", "huffman.jpg", "C++, Doxygen", `Koder Huffmana to aplikacja napisana w języku C++, która umożliwia efektywne kompresowanie i dekompresowanie danych
przy użyciu algorytmu Huffmana. Przy tworzeniu aplikacji po raz pierwszy użyłem narzędzia Doxygen do generowania dokumentacji,
co pozwoliło mi usystematyzować kod i ułatwić jego zrozumienie. Realizacja tego projektu była świetną okazją do nauki zaawansowanych
struktur danych i rozwijania umiejętności w tworzeniu profesjonalnej dokumentacji technicznej.,`));

projectTab.push(new projekt("Konkurs Prevac","Prevac.jpg","C++, C#, WindowsForm, Modbus, SQLite ", `Projekt konkursowy dla firmy Prevac to przedsięwzięcie, 
w którym zaprojektowałem i zaprogramowałem system obsługujący linię produkcyjną. 
System działa zarówno po stronie komputera, jak i serwera,
umożliwiając pracownikom logowanie się oraz komunikację za pomocą portu szeregowego oraz przez internet przy wykorzystaniu protokołu Modbus.`));

projectTab.push(new projekt("Szachy","Chess.jpg","C++, SFML",`Szachy to aplikacja napisana w języku C++ z wykorzystaniem biblioteki SFML,
umożliwiająca grę w szachy na komputerze lokalnym. Zaimplementowałem podświetlanie ruchów, 
co pomaga graczom planować i podejmować taktyczne decyzje.
Celem tego projektu było połączenie mojej pasji do szachów z rozwijaniem umiejętności programistycznych, tworząc funkcjonalną i estetyczną grę dla lokalnych rozgrywek`));

projectTab.push(new projekt("Tetris","Tetris.jpg","C++, SFML",`Tetris to przedsięwzięcie,
w którym zaprojektowałem i zaimplementowałem popularną grę Tetris w języku C++ przy użyciu biblioteki SFML. 
worzenie tego projektu było dla mnie nie tylko okazją do rozwijania umiejętności programistycznych, ale również do zgłębiania zagadnień związanych z logiką gier.`));

projectTab.push(new projekt("Kalkulator","Calculator.jpg","C#, WPF",`Kalkulator aplikacja napisana w języku C# przy użyciu technologii WPF. 
oferuje prosty i interaktywny interfejs graficzny, który umożliwia wykonywanie podstawowych operacji matematycznych`));

projectTab.push(new projekt("Olimpiada","","C++",`Wiele Aplikacji przygotowanych na olimpiade informatyczą,
aplikacje rozwązywały typowe dla olimiady algorytmiczne problemy,`));

let ret="";
for (let index = 0; index < projectTab.length; index++) {
    ret+=projectTab[index].retCode();
    console.log(index);
}
mainContener.innerHTML=ret;

