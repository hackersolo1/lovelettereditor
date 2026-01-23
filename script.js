document.addEventListener('DOMContentLoaded', () => {
    function previewWindow(active, atualText, downBtn) {
        document.querySelector('.preview-cont').style.animation = `${active} 0.3s ease-in-out forwards`;
        setTimeout(() => {
            visuBtn.innerText = `${atualText}`;
            document.querySelector('.downloadBtn').style.display = `${downBtn}`;
        }, 100);
    }

    function switchTheme(themeKey) {
        document.querySelector('.preview').style.background = THEMEINFO.theme[themeKey].background;
        document.querySelector('.preview h2').style.color = THEMEINFO.theme[themeKey].h2;
        document.querySelector('.preview h3').style.color = THEMEINFO.theme[themeKey].h3;
        document.querySelector('.preview p').style.color = THEMEINFO.theme[themeKey].p;
    }

    function defaults() {
        document.querySelector('.white-theme').style.border = '4px solid black';
        switchTheme('white');
        document.querySelectorAll('.font-cont button').forEach(itens => {
            itens.style.border = THEMEINFO.border.borderOff;
        });
        document.querySelector('.serif').style.border = THEMEINFO.border.borderOn;
        document.querySelector('.downloadBtn').style.display = 'none';
    }

    function switchBorder(whiteBtn, nightBtn) {
        document.querySelector('.white-theme').style.border = whiteBtn;
        document.querySelector('.night-theme').style.border = nightBtn;
    }

    function createFontsBtn() {
        const fontCont = document.querySelector('.font-cont');

        Object.entries(THEMEINFO.fonts).forEach(([className, fontValue]) => {
            const btn = document.createElement('button');
            btn.innerText = className;
            btn.classList.add(className);
            btn.style.fontFamily = fontValue;
            btn.style.border = THEMEINFO.border.borderOff

            fontCont.appendChild(btn);
        });
    }


    const THEMEINFO = {
        theme: {
            white: {
                background: '#ffebf0',
                h2: '#4a4a4a',
                h3: '#d63384',
                p: '#000000',
            },

            night: {
                background: '#0f172a',
                h2: '#ffd90070',
                h3: '#ffd700',
                p: '#e2e8f0',
            },
        },

        fonts: {
            serif: 'serif',
            sans: 'Lucida Sans',
            mono: 'monospace',
            cursiva: 'cursive',
            arvo: 'arvo',
            boris: 'boris',
            buba: 'buba',
            cloud: 'cloud',
            games: 'games',
            humblle: 'humblle',
            impossible: 'impossible',
            kensington: 'kensington',
            kiwi: 'kiwi',
            lobster: 'lobster',
            steetwear: 'streetwear',
            tagtype: 'tagtype',
            ubuntu: 'ubuntu',
            vanadine: 'vanadine',
        },

        border: {
            borderOn: '4px solid white',
            borderOff: '4px solid rgb(0, 35, 114)',
        }
    }

    const visuBtn = document.querySelector('.visu');

    visuBtn.addEventListener('click', () => {
        if (visuBtn.innerText == 'Visualizar') {
            previewWindow('show', 'Editor', 'block');
        }
        if (visuBtn.innerText == 'Editor') {
            previewWindow('unshow', 'Visualizar', 'none');
        }
    });

    document.querySelector('#nameParc').addEventListener('input', () => {
        const nameParcValue = document.querySelector('#nameParc').value;
        if (nameParcValue == '') {
            document.querySelector('.preview h3').innerText = 'O nome ficará assim';
        } else {
            document.querySelector('.preview h3').innerText = nameParcValue;
        }
    });

    document.querySelector('#mensageText').addEventListener('input', () => {
        const mensageTextValue = document.querySelector('#mensageText').value;
        if (mensageTextValue == '') {
            document.querySelector('.preview p').innerText = 'Esse texto é apenas uma alternativa para que você possa testar as fontes, imagens e tema. Assim que você preencher as informações necessárias (nome, mensagem e o link imagem) esses textos serão substituidos...';
        } else {
            document.querySelector('.preview p').innerText = mensageTextValue;
        }
    });

    document.querySelector('.white-theme').addEventListener('click', () => {
        switchTheme('white');
        switchBorder('4px solid black', '4px solid #0f172a', '4px solid rgb(0, 35, 114)');
    });

    document.querySelector('.night-theme').addEventListener('click', () => {
        switchTheme('night');
        switchBorder('4px solid #ffebf0', '4px solid white', '4px solid rgb(0, 35, 114)')
    });

    document.querySelector('.font-cont').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        document.querySelectorAll('.font-cont button').forEach(btn => {
            btn.style.border = THEMEINFO.border.borderOff;
        });

        const fontKey = e.target.classList;
        document.querySelector('.preview').style.fontFamily = THEMEINFO.fonts[fontKey];

        e.target.style.border = THEMEINFO.border.borderOn;
    });

    document.querySelector('.downloadBtn').addEventListener('click', () => {
        html2canvas(document.querySelector('.preview')).then(canvas => {
            const link = canvas.toDataURL();
            const a = document.createElement('a');
            a.href = link;
            a.download = 'carta-personalizada.png';
            a.click();

        });
    });
    createFontsBtn();
    defaults();
})