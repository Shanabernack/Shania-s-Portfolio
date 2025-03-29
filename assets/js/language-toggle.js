document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('language-toggle');
    if (!languageButton) {
        console.error("Sprachumschalter nicht gefunden!");
        return;
    }

    let currentLang = localStorage.getItem('language') || 'DE';
    setLanguage(currentLang);
    updateButtonLabel(currentLang);

    languageButton.addEventListener('click', function () {
        currentLang = (currentLang === 'ENG') ? 'DE' : 'ENG';
        localStorage.setItem('language', currentLang);
        setLanguage(currentLang);
        updateButtonLabel(currentLang);
    });

    function updateButtonLabel(language) {
        languageButton.textContent = (language === 'DE') ? 'ENG' : 'DE';
    }

    function setLanguage(language) {
        console.log(`Sprache gewechselt zu: ${language}`);

        const translations = {
            DE: {
                home: "Home",
                projects: "Projekte",
                learnProject: "Lernprojekt",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archiv",
                bannerTitle: "Ahzos",
                bannerText: "Schulprojekt mit Luis Thiermann",
                sectionOneTitle: "Die Reise und die moralischen Entscheidungen",
                sectionOneText: "Erlebe eine epische Reise durch gefährliche Welten, die durch geschicktes Springen und Laufen überwunden werden müssen. Das Spiel fordert deine Reaktionsfähigkeit heraus und führt dich durch abwechslungsreiche Biome mit spannenden Hindernissen.",
                sectionTwoText: "Im Laufe des Spiels wirst du mit moralischen Entscheidungen konfrontiert, die deine Wahrnehmung auf die Welt und deine Handlungen in Frage stellen. Entdecke das wahre Wesen des Spiels, während du die dunklen Geheimnisse des Watzmanns entschlüsselst.",
                sectionThreeTitle: "Was dich im Spiel erwartet",
                sectionThreeText: "Der Spieler trifft auf verschiedene Herausforderungen, die immer schwieriger werden, während er voranschreitet. Gegner und Hindernisse verlangen nicht nur schnelle Reaktionen, sondern auch eine sorgfältige Taktik und Planung.",
                downloadLink: "Download",
                tilesets: "Tilesets und Hintergründe",
                tilesetText: "Für das Spiel Ahzos habe ich Tilesets und Hintergründe in Aseprite entworfen. Diese Pixel-Art-Grafiken tragen zur retro-inspirierten Atmosphäre des Spiels bei und bilden die visuelle Grundlage für die Spielwelten. Die Tilesets beinhalten interaktive Elemente, während die Hintergründe das Spielerlebnis vertiefen und die Handlung unterstützen.",
                downloadTilesets: "Download Tilesets",
                hangmanTitle: "Hangman",
                hangmanText: "Dieses Minigame, Hangman, wurde als kleines Spiel entwickelt, um den Namen des Spiels Ahzos zu erraten, bevor du das Hauptspiel startest. Viel Spaß beim Erraten!",
                downloadHangman: "Download Hangman"
            },
            ENG: {
                home: "Home",
                projects: "Projects",
                learnProject: "Learning Project", // Hier wird Lernprojekt übersetzt!
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archive",
                bannerTitle: "Ahzos",
                bannerText: "School project with Luis Thiermann",
                sectionOneTitle: "The Journey and the Moral Choices",
                sectionOneText: "Experience an epic journey through dangerous worlds that must be overcome through skillful jumping and running. The game challenges your reaction speed and leads you through diverse biomes with exciting obstacles.",
                sectionTwoText: "Throughout the game, you'll be confronted with moral choices that challenge your perception of the world and your actions. Discover the true nature of the game as you unravel the dark secrets of the Watzmann.",
                sectionThreeTitle: "What Awaits You in the Game",
                sectionThreeText: "The player encounters various challenges that become increasingly difficult as they progress. Enemies and obstacles require not only quick reactions but also careful tactics and planning.",
                downloadLink: "Download",
                tilesets: "Tilesets and Backgrounds",
                tilesetText: "For the Game Ahzos I designed tilesets and backgrounds in Aseprite. These pixel art graphics contribute to the game's retro-inspired atmosphere and form the visual foundation for the game worlds. The tilesets contain interactive elements, while the backgrounds deepen the gameplay experience and support the storyline.",
                downloadTilesets: "Download Tilesets",
                hangmanTitle: "Hangman",
                hangmanText: "This minigame, Hangman, was designed as a little game to help you guess the name of the game, Ahzos, before starting the main game. Have fun guessing!",
                downloadHangman: "Download Hangman"
            }
        };

        function updateText(id, text) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = text;
            } else {
                console.warn(`Element mit ID "${id}" nicht gefunden!`);
            }
        }

        // Navigation
        updateText('homeLink', translations[language].home);
        updateText('projectsLink', translations[language].projects);
        updateText('learningProjectLink', translations[language].learnProject); // Hier wird "Lernprojekt" übersetzt!
        updateText('ahzosLink', translations[language].ahzos);
        updateText('shatteredRealityLink', translations[language].shatteredReality);
        updateText('astrabannLink', translations[language].astrabann);
        updateText('archiveLink', translations[language].archive);

        // Hauptinhalt
        updateText('bannerTitle', translations[language].bannerTitle);
        updateText('bannerText', translations[language].bannerText);
        updateText('sectionOneTitle', translations[language].sectionOneTitle);
        updateText('sectionOneText', translations[language].sectionOneText);
        updateText('sectionTwoText', translations[language].sectionTwoText);
        updateText('sectionThreeTitle', translations[language].sectionThreeTitle);
        updateText('sectionThreeText', translations[language].sectionThreeText);
        updateText('downloadLink', translations[language].downloadLink);
        updateText('tilesets', translations[language].tilesets);
        updateText('tilesetText', translations[language].tilesetText);
        updateText('downloadTilesets', translations[language].downloadTilesets);
        updateText('hangmanTitle', translations[language].hangmanTitle);
        updateText('hangmanText', translations[language].hangmanText);
        updateText('downloadHangman', translations[language].downloadHangman);
    }
});

// Shattered Reality
document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("language-toggle");

    // Standardmäßig auf Deutsch setzen, falls keine Sprache gespeichert ist
    let currentLanguage = localStorage.getItem("language");

    if (!currentLanguage) {
        currentLanguage = "DE"; // **Standard auf Deutsch setzen**
        localStorage.setItem("language", currentLanguage); // **Speicherung der Standard-Sprache**
    }

    // Sprache setzen
    setLanguage(currentLanguage);
    updateButtonText(currentLanguage);

    languageButton.addEventListener("click", function () {
        // Sprache umschalten
        currentLanguage = (currentLanguage === "DE") ? "ENG" : "DE";

        // Neue Sprache speichern und anwenden
        localStorage.setItem("language", currentLanguage);
        setLanguage(currentLanguage);
        updateButtonText(currentLanguage);
    });

    function setLanguage(language) {
        console.log(`Sprache gewechselt zu: ${language}`); // Debugging: Prüfen, ob die Sprache korrekt wechselt

        const translations = {
            DE: {
                home: "Home",
                projects: "Projekte",
                learnProject: "Lernprojekt",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archiv",
                pageTitle: "The Shattered Reality",
                pageDescription: "Schulprojekt",
                gameTitle: 'Erlebe die Welt von "The Shattered Reality"',
                gameDescription: 'In "The Shattered Reality" begibst du dich auf eine aufregende Reise in einer post-apokalyptischen Welt, die von Mutanten überrannt wird. Gemeinsam mit deinen Mitspielern musst du eine mystische Wand vervollständigen, um die Realität vor dem Zerfall zu bewahren. Durch das Sammeln von Artefakten, die von gefährlichen Bossen bewacht werden, steht das Schicksal der Welt auf dem Spiel. Dein Team muss zusammenarbeiten, um diese Herausforderung zu meistern und die letzte Hoffnung der Menschheit zu retten.',
                additionalGameDescription: 'Jeder Spieler übernimmt die Rolle eines mutierten Überlebenden mit einzigartigen Fähigkeiten die auf ihre Klasse abgestimmt sind und strategisch eingesetzt werden müssen, um Kämpfe zu bestehen, Rätsel zu lösen und Ressourcen effizient zu verwalten.',
                specialFeaturesTitle: 'Besondere Merkmale von "The Shattered Reality"',
                specialFeaturesText: `
                    <li>Kooperatives Gameplay, bei dem Zusammenarbeit entscheidend ist.</li>
                    <li>Einzigartige klassenbasierte Fähigkeiten für jeden Spieler.</li>
                    <li>Schlüsselmechanik mit Mini-Bossen und Ressourcenmanagement.</li>
                    <li>Das ultimative Ziel ist es, das letzte Artefakt zu erlangen und die Wand zu vervollständigen.</li>
                    <li>Intensive Bosskämpfe und immer größer werdende Herausforderungen.</li>
                `,
                downloadButton: "Download GDD"
            },
            ENG: {
                home: "Home",
                projects: "Projects",
                learnProject: "Learning Project",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archive",
                pageTitle: "The Shattered Reality",
                pageDescription: "School project",
                gameTitle: 'Experience the world of "The Shattered Reality"',
                gameDescription: 'In "The Shattered Reality," you embark on an exciting journey through a post-apocalyptic world overrun by mutants. Together with your fellow players, you must complete a mystical wall to save reality from disintegration. By collecting artifacts guarded by dangerous bosses, the fate of the world hangs in the balance. Your team must work together to overcome this challenge and save humanitys last hope.',
                additionalGameDescription: 'Each player takes on the role of a mutated survivor with unique abilities tailored to their class, which must be used strategically to survive battles, solve puzzles, and manage resources efficiently.',
                specialFeaturesTitle: 'Special Features of "The Shattered Reality"',
                specialFeaturesText: `
                    <li>Cooperative gameplay where collaboration is key.</li>
                    <li>Unique class-based abilities for each player.</li>
                    <li>Core mechanics involving mini-bosses and resource management.</li>
                    <li>The ultimate goal is to acquire the final artifact and complete the wall.</li>
                    <li>Intense boss fights and increasingly difficult challenges.</li>
                `,
                downloadButton: "Download GDD"
            }
        };

        function updateText(id, text) {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = text;
            } else {
                console.warn(`Element mit ID "${id}" nicht gefunden!`);
            }
        }

        // Navigation (auch "Lernprojekt" wird jetzt übersetzt!)
        updateText("homeLink", translations[language].home);
        updateText("projectsLink", translations[language].projects);
        updateText("learningProjectLink", translations[language].learnProject);
        updateText("ahzosLink", translations[language].ahzos);
        updateText("shatteredRealityLink", translations[language].shatteredReality);
        updateText("astrabannLink", translations[language].astrabann);
        updateText("archiveLink", translations[language].archive);

        // Hauptinhalt
        updateText("pageTitle", translations[language].pageTitle);
        updateText("pageDescription", translations[language].pageDescription);
        updateText("gameTitle", translations[language].gameTitle);
        updateText("gameDescription", translations[language].gameDescription);
        updateText("additionalGameDescription", translations[language].additionalGameDescription);
        updateText("specialFeaturesTitle", translations[language].specialFeaturesTitle);
        updateText("specialFeaturesText", translations[language].specialFeaturesText);
        updateText("downloadButton", translations[language].downloadButton);
    }

    function updateButtonText(language) {
        languageButton.textContent = (language === "DE") ? "ENG" : "DE";
    }
});

// index.html

document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");

    languageToggle.addEventListener("click", function (event) {
        event.preventDefault();

        if (languageToggle.innerText === "ENG") {
            languageToggle.innerText = "DE";
            changeLanguage("en");
        } else {
            languageToggle.innerText = "ENG";
            changeLanguage("de");
        }
    });

    function changeLanguage(language) {
        const translations = {
            "de": {
                "bannerHeader": "Hallihallo, ich bin Shania",
                "bannerDescription": "Kreatives Chaos mit System.<br/>Code. Design.",
                "navProjects": "Projekte",  // Schon richtig ✅
                "navArchive": "Archiv",  // Schon richtig ✅
                "oneHeader": "Ich.",
                "oneDescription": "Debugging my life since 2004.",
                "oneCreative": "Kreativität in jeder Form.</br>Ich liebe es, zu lesen, zu malen, digital zu zeichnen, Musik zu machen (Gitarre & Piano) und zu häkeln.</br>. . .",
                "oneGaming": "Gaming-Obsession.</br>Meine Lieblingsspiele aller Zeiten: The Legend of Zelda, Age of Empires, Celeste<br/>. . .",
                "twoHeader": "Katze.",
                "twoDescription": "Ponyo & Bibbles.",
                "threeHeader": "Gedächtnisanker.",
                "threeDescription": "Schaffen. Scheitern. Weitermachen.",
                "threeQuote": "Es ist niemals zu spät, etwas Neues zu lernen. Niemals zu spät, einen Traum weiterzuverfolgen. Niemals zu spät, besser zu werden – in dem, was du liebst. Man wächst, man fällt, man zweifelt. Doch wer stehen bleibt, sieht nie, wie weit er gehen kann. Manchmal braucht es nur einen Funken, einen Moment – und alles verändert sich. Die ersten Zeilen Code, der erste Pinselstrich, der erste Akkord. Perfekt war es nie. Doch Fortschritt ist das Ziel. Bleib dran. Halte fest. Erschaffe. Denn die besten Geschichten schreibt nicht Talent, sondern Beharrlichkeit. Es ist niemals zu spät. Niemals.",
                "fourHeader": "Tätigkeit.",
                "fourDescription": "Meine Skills an der SRH in Heidelberg perfektionieren und meine Stats in Game Dev & Multimedia maxen.",
                "contactHeader": "Na, Interesse geweckt?",
                "contactText": "Kontaktier mich – Bugs fixe ich, Mails lese ich.",
                "emailPlaceholder": "Deine E-Mail-Adresse",
                "messagePlaceholder": "Deine Nachricht",
                "subjectPlaceholder": "Betreff",
                "sendButton": "Senden",
                "footerTwitter": "Twitter",
                "footerLinkedIn": "LinkedIn",
                "footerInstagram": "Instagram",
                "footerGitHub": "GitHub",
                "footerEmail": "E-Mail"
            },
            "en": {
                "bannerHeader": "Hello, I'm Shania",
                "bannerDescription": "Creative chaos with system.<br/>Code. Design.",
                "navProjects": "Projects",  // Hinzugefügt ✅
                "navArchive": "Archive",  // Hinzugefügt ✅
                "oneHeader": "Me.",
                "oneDescription": "Debugging my life since 2004.",
                "oneCreative": "Creativity in all forms.</br>I love reading, painting, digital drawing, making music (guitar & piano), and crocheting.</br>. . .",
                "oneGaming": "Gaming Obsession.</br>My all-time favorite games: The Legend of Zelda, Age of Empires, Celeste.<br/>. . .",
                "twoHeader": "Cats.",
                "twoDescription": "Ponyo & Bibbles.",
                "threeHeader": "Memory Anchors.",
                "threeDescription": "Create. Fail. Keep going.",
                "threeQuote": "It’s never too late to learn something new, never too late to pursue a dream, never too late to become better at what you love. You grow, you fall, you doubt. But if you remain standing still, you'll never discover how far you can go. Sometimes all it takes is a single spark, one moment—and everything changes. The first lines of code, the first brushstroke, the first chord—it was never perfect, but progress is the goal. Keep going, hold on, create. Because the greatest stories aren't written by talent alone, but by perseverance. It's never too late. Never.",
                "fourHeader": "Activity.",
                "fourDescription": "Perfecting my skills at SRH in Heidelberg and maxing my stats in Game Dev & Multimedia.",
                "contactHeader": "Interested?",
                "contactText": "Contact me – I fix bugs, I read emails.",
                "emailPlaceholder": "Your Email Address",
                "messagePlaceholder": "Your Message",
                "subjectPlaceholder": "Subject",
                "sendButton": "Send",
                "footerTwitter": "Twitter",
                "footerLinkedIn": "LinkedIn",
                "footerInstagram": "Instagram",
                "footerGitHub": "GitHub",
                "footerEmail": "Email"
            }
        };

        const selectedLanguage = translations[language];

        // Setze alle Texte mit IDs
        Object.keys(selectedLanguage).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = selectedLanguage[id]; // innerText → innerHTML
            }
        });

        // Setze spezielle Placeholder- und Button-Werte für Formulare
        document.querySelector("input[type='email']").setAttribute("placeholder", selectedLanguage.emailPlaceholder);
        document.querySelector("textarea").setAttribute("placeholder", selectedLanguage.messagePlaceholder);
        document.querySelector("input[name='subject']").setAttribute("placeholder", selectedLanguage.subjectPlaceholder);
        document.querySelector("input[type='submit']").setAttribute("value", selectedLanguage.sendButton);

        // Setze Footer-Links
        document.querySelector("footer ul li:nth-child(1) a span").innerText = selectedLanguage.footerTwitter;
        document.querySelector("footer ul li:nth-child(2) a span").innerText = selectedLanguage.footerLinkedIn;
        document.querySelector("footer ul li:nth-child(3) a span").innerText = selectedLanguage.footerInstagram;
        document.querySelector("footer ul li:nth-child(4) a span").innerText = selectedLanguage.footerGitHub;
        document.querySelector("footer ul li:nth-child(5) a span").innerText = selectedLanguage.footerEmail;
    }
});

// Archiv

document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('language-toggle'); // ENG/DE Button
    if (!languageButton) {
        console.error("Sprachumschalter nicht gefunden!");
        return;
    }

    let currentLang = localStorage.getItem('language') || 'DE';

    setLanguage(currentLang);
    updateButtonLabel(currentLang);

    // Event-Listener für Button-Klick
    languageButton.addEventListener('click', function () {
        currentLang = (currentLang === 'ENG') ? 'DE' : 'ENG';
        localStorage.setItem('language', currentLang);
        setLanguage(currentLang);
        updateButtonLabel(currentLang);
    });

    function updateButtonLabel(language) {
        languageButton.textContent = (language === 'DE') ? 'ENG' : 'DE';
    }

    function setLanguage(language) {
        console.log(`Sprache gewechselt zu: ${language}`);

        const translations = {
            DE: {
                home: "Home",
                projects: "Projekte",
                learnProject: "Lernprojekt",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archiv",
                archiveHeading: "Archiv",
                gallery: "Bildergalerie",
                galleryHome: "Home",
                projectSection: "Projekte",
                projectSub: "1-3",
                rdmprojects: "weitere Werke von mir",
                cats: "Katzen",
                catNames: "Ponyo & Bibbles",
                footer: "© Shania Priscilla Kim Sulit."
            },
            ENG: {
                home: "Home",
                projects: "Projects",
                learnProject: "Learning Project",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archive",
                archiveHeading: "Archive",
                gallery: "Image Gallery",
                galleryHome: "Home",
                projectSection: "Projects",
                projectSub: "1-3",
                rdmprojects: "more works by me",
                cats: "Cats",
                catNames: "Ponyo & Bibbles",
                footer: "© Shania Priscilla Kim Sulit."
            }
        };

        // Elemente selektieren und Text setzen
        document.getElementById('homeLink').textContent = translations[language].home;
        document.getElementById('projectsLink').textContent = translations[language].projects;
        document.getElementById('learnProjectLink').textContent = translations[language].learnProject;
        document.getElementById('ahzosLink').textContent = translations[language].ahzos;
        document.getElementById('shatteredRealityLink').textContent = translations[language].shatteredReality;
        document.getElementById('astrabannLink').textContent = translations[language].astrabann;
        document.getElementById('archiveLink').textContent = translations[language].archive;
        document.getElementById('gallery').textContent = translations[language].gallery;
        document.getElementById('galleryHome').textContent = translations[language].galleryHome;
        document.getElementById('projectSection').textContent = translations[language].projectSection;
        document.getElementById('projectSub').textContent = translations[language].projectSub;
        document.getElementById('rdmprojects').textContent = translations[language].rdmprojects;
        document.getElementById('cats').textContent = translations[language].cats;
        document.getElementById('catNames').textContent = translations[language].catNames;
        document.querySelector('footer ul.copyright li:first-child').textContent = translations[language].footer;
    }
});

//Astrabann 
document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("language-toggle");

    // Standardmäßig auf Deutsch setzen, falls keine Sprache gespeichert ist
    let currentLang = localStorage.getItem("language") || "ENG";
    setLanguage(currentLang);
    updateButtonLabel(currentLang);

    languageButton.addEventListener("click", function () {
        // Sprache umschalten
        currentLang = (currentLang === "ENG") ? "DE" : "ENG";

        // Neue Sprache speichern und anwenden
        localStorage.setItem("language", currentLang);
        setLanguage(currentLang);
        updateButtonLabel(currentLang);
    });

    function updateButtonLabel(language) {
        // Setzt den Button-Text auf die andere Sprache
        languageButton.textContent = (language === "ENG") ? "DE" : "ENG";
    }
});

function setLanguage(language) {
    const translations = {
        DE: {
            gddTitle: "Game Design Dokument",
            gddText: "Das Game Design Document definiert die Kernmechaniken, Story und Rätsel von AstraBann. Ziel ist eine immersive Spielerfahrung, die historisches Wissen mit herausforderndem Gameplay verbindet.",
            gameplayTemplateTitle: "Gameplay-Vorlage (Testlevel)",
            gameplayTemplateText: "Diese frühe Gameplay-Vorlage dient als Testumgebung für die grundlegenden Rätselmechaniken. Der Fokus liegt aktuell auf der Implementierung von Kernfunktionen.",
            gameplayTitle: "Ein magisches Rätsel-Abenteuer im Heidelberger Schloss",
            gameplayText: "AstraBann ist ein storybasiertes Rätsel-Plattformspiel, das Spieler auf eine magische Reise durch das Heidelberger Schloss führt. Mit kniffligen Rätseln, historischen Elementen und Sammelobjekten verbindet das Spiel Bildung und Unterhaltung. Die Spieler erkunden eine realistisch nachgebildete Umgebung, lösen geschichtsträchtige Aufgaben und entdecken versteckte Artefakte. Die immersive Story und interaktive Mechaniken fördern Neugier und langfristiges Engagement.",
            astrabannTitle: "School project with Adrian, Raed & Maksym",
            gameplayFeaturesTitle: "Gameplay",
            loreTitle: "Lore",
            loreText: "Im Jahr 1814 gelang es Charles de Graimberg und seinen Mitstreitern, einen unruhestiftenden Aethergeist mithilfe einer speziellen Kupferplattentechnik in der Heidelberger Schlossruine zu bannen. Seitdem wird das Siegel von Generation zu Generation bewacht. 2024 wird die junge Magierin Emilie Bonnet-Schönhausen von der Stadt Heidelberg beauftragt, die Ruine zu untersuchen, ohne zu wissen, dass sie eine direkte Verbindung zu den Ereignissen der Vergangenheit hat. Der Bann schwächt sich, und der Geist beginnt, Rätsel zu hinterlassen, um seine Befreiung zu erzwingen. Der Spieler übernimmt die Rolle von Emilie, entschlüsselt die Geheimnisse der Ruine und stellt sich dem Geist in einem finalen Duell, einem magischen Rätselspiel, das über das Schicksal der Schlossruine entscheidet.",
            feature1: "Rätsel & Erkundung – Historisch inspirierte Puzzle im Heidelberger Schloss lösen.",
            feature2: "Plattforming-Elemente – Springen, klettern und Hindernisse überwinden.",
            feature3: "Magische Story – Spieler schlüpfen in die Rolle eines Zauberers mit einer geheimnisvollen Mission.",
            feature4: "Sammelobjekte – Versteckte Artefakte enthüllen spannende Hintergrundgeschichten.",
            feature5: "Immersive Atmosphäre – Originalgetreue 3D-Umgebung mit mystischer Stimmung."
        },
        ENG: {
            gddTitle: "Game Design Document",
            gddText: "The Game Design Document defines AstraBann's core mechanics, story, and puzzles. The goal is an immersive experience that combines historical knowledge with challenging gameplay.",
            gameplayTemplateTitle: "Gameplay Template (Test Level)",
            gameplayTemplateText: "This early gameplay template serves as a test bed for the basic puzzle mechanics. The current focus is on implementing core features.",
            gameplayTitle: "A Magical Puzzle Adventure in Heidelberg Castle",
            gameplayText: "AstraBann is a story-driven puzzle-platformer that takes players on a magical journey through Heidelberg Castle. Featuring challenging puzzles, historical elements, and collectibles, the game combines education and entertainment. Players explore a realistically recreated environment, solve history-driven quests, and discover hidden artifacts. The immersive story and interactive mechanics encourage curiosity and long-term engagement.",
            astrabannTitle: "Schulprojekt mit Adrian, Raed & Maksym",
            gameplayFeaturesTitle: "Gameplay",
            loreTitle: "Lore",
            loreText: "In 1814, Charles de Graimberg and his comrades succeeded in banishing a troublemaking aetheric spirit in the Heidelberg castle ruins using a special copperplate technique. Since then, the seal has been guarded from generation to generation. In 2024, the young magician Emilie Bonnet-Schönhausen is commissioned by the city of Heidelberg to investigate the ruins, unaware of their direct connection to past events. The spell weakens, and the spirit begins to leave behind riddles in an attempt to force its release. The player assumes the role of Emilie, unlocks the secrets of the ruins, and faces the spirit in a final duel, a magical puzzle game that will decide the fate of the castle ruins.",
            feature1: "Puzzles & Exploration – Solve historically inspired puzzles in Heidelberg Castle.",
            feature2: "Platforming Elements – Jump, climb, and overcome obstacles.",
            feature3: "Magical Story – Players take on the role of a wizard on a mysterious mission.",
            feature4: "Collectibles – Hidden artifacts reveal exciting background stories.",
            feature5: "Immersive Atmosphere – Authentic 3D environment with a mystical setting."
        }
    };


    function updateText(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }

    // Setze die Texte basierend auf der ausgewählten Sprache
    Object.keys(translations[language]).forEach(id => {
        updateText(id, translations[language][id]);
    });
}