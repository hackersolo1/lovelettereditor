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
        document.querySelectorAll('.sans, .mono, .cursiva').forEach(e => {
            e.style.border = THEMEINFO.border.borderOff;
        });
        document.querySelector('.serif').style.border = THEMEINFO.border.borderOn;
        document.querySelector('.downloadBtn').style.display = 'none';
    }

    function switchBorder(whiteBtn, nightBtn) {
        document.querySelector('.white-theme').style.border = whiteBtn;
        document.querySelector('.night-theme').style.border = nightBtn;
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
        if (e.target.classList == 'serif') {
            document.querySelectorAll('.sans, .mono, .cursiva').forEach(fontsItens => {
                fontsItens.style.border = THEMEINFO.border.borderOff;
            });
            document.querySelector('.preview').style.fontFamily = THEMEINFO.fonts.serif;
            document.querySelector('.serif').style.border = THEMEINFO.border.borderOn;
        } else if (e.target.classList == 'sans') {
            document.querySelectorAll('.serif, .mono, .cursiva').forEach(fontsItens => {
                fontsItens.style.border = THEMEINFO.border.borderOff;
            });
            document.querySelector('.preview').style.fontFamily = THEMEINFO.fonts.sans;
            document.querySelector('.sans').style.border = THEMEINFO.border.borderOn;
        } else if (e.target.classList == 'mono') {
            document.querySelectorAll('.sans, .serif, .cursiva').forEach(fontsItens => {
                fontsItens.style.border = THEMEINFO.border.borderOff;
            });
            document.querySelector('.preview').style.fontFamily = THEMEINFO.fonts.mono;
            document.querySelector('.mono').style.border = THEMEINFO.border.borderOn;
        } else if (e.target.classList == 'cursiva') {
            document.querySelectorAll('.sans, .mono, .serif').forEach(fontsItens => {
                fontsItens.style.border = THEMEINFO.border.borderOff;
            });
            document.querySelector('.preview').style.fontFamily = THEMEINFO.fonts.cursiva;
            document.querySelector('.cursiva').style.border = THEMEINFO.border.borderOn;
        }
    });

    document.querySelector('.downloadBtn').addEventListener('click', () => {
        document.querySelector('.preview').style.borderRadius = '0px';
        document.querySelector('.preview').style.height = 'auto';
        html2canvas(document.querySelector('.preview')).then(canvas => {
            const img = canvas.toDataURL('imagem/png');
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = img;
                link.download = 'carta-personalizada.png';
                link.click();
            }, 100);
            setTimeout(() => { 
document.querySelector('.preview').style.borderRadius = '20px';
document.querySelector('.preview').style.height = '100%';
}), 200);

        });
    });
    defaults();
})


