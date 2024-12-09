

class project {
    constructor(name, fName, tech, disc) {
        this.projektName = name;
        this.fileName = fName;
        this.discription = disc;
        this.technology = tech;
    }

    retCode() {
        return `
        <div class="project-card">
            <img src="${this.fileName}" alt="${this.projektName} image">
            <div class="details">
                <h3>${this.projektName}</h3>
                <p><strong>Technologie:</strong> ${this.technology}</p>
                <p>${this.discription}</p>
            </div>
        </div>`;
    }
}
let projectTab = [
    new project("Spotify", "spotify.jpg", "C++, SQL, FTP", `Spotify is an application written in C++ using the FTP protocol and SQL database. It allows you to manage a local music library and download songs from an FTP server, as well as store information about songs and playlists in the SQL database.`),
    new project("Huffman Encoder", "huffman.jpg", "C++, Doxygen", `The Huffman Encoder is an application written in C++ that allows efficient data compression and decompression using the Huffman algorithm.`),
    new project("Prevac Contest", "Prevac.jpg", "C++, C#, WindowsForm, Modbus, SQLite", `The contest project for the company Prevac, where I designed a system that controls a production line. The system works on both the computer and server sides, enabling login and communication.`),
    new project("Chess", "Chess.jpg", "C++, SFML", `Chess is an application written in C++ using the SFML library, allowing you to play chess on a local computer.`),
    new project("Tetris", "Tetris.jpg", "C++, SFML", `Tetris is a popular game created in C++ using SFML.`),
    new project("Calculator", "Calculator.jpg", "C#, WPF", `The Calculator is an application written in C# using WPF technology. It provides a simple interface for performing basic mathematical operations.`),
    new project("Olympiad", "", "C++", `Several applications prepared for the computer science olympiad, solving algorithmic problems.`)
];


let ret = "";
projectTab.forEach(project => {
    ret += project.retCode();
});
document.getElementById("main").innerHTML = ret;
