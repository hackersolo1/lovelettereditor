document.addEventListener('DOMContentLoaded', () => {
    const visuBtn = document.querySelector('.visu');
    const parcInput = document.querySelector('#nameParc');
    const mensageInput = document.querySelector('#mensageText');
    const imageInput = document.querySelector('#imageUrl');
    const musicInput = document.querySelector('#musicUrl');
    const whiteThemeBtn = document.querySelector('.white-theme');
    const nightThemeBtn = document.querySelector('.night-theme');
    const serifBtn = document.querySelector('.serif');
    const sansBtn = document.querySelector('.sans');
    const monoBtn = document.querySelector('.mono');
    const cursivaBtn = document.querySelector('.cursiva');
    const previewCont = document.querySelector('.preview-cont');
    const preview = document.querySelector('.preview');
    const previewImg = document.querySelector('.preview img');
    const previewH2 = document.querySelector('.preview h2');
    const previewH3 = document.querySelector('.preview h3');
    const previewP = document.querySelector('.preview p')


    // Default code
    serifBtn.style.border = '4px solid white';
    previewCont.style.fontFamily = 'serif';
    whiteThemeBtn.style.border = '4px solid white';
    previewH2.style.color = '#4a4a4a';
    previewH3.style.color = '#d63384';
    previewP.style.color = '#2d2d2d';
    // --

    // Input's code's
    parcInput.addEventListener('input', () => {
        const parcInputValue = parcInput.value;
        if (parcInputValue == '') {
            previewH3.textContent = 'O nome ficará assim'
        } else {
            previewH3.textContent = parcInputValue;
        }
    });

    mensageInput.addEventListener('input', () => {
        const mensageInputValue = mensageInput.value;
        if (mensageInputValue == '') {
            previewP.textContent = 'Esse texto é apenas uma alternativa para que você possa testar as fontes, imagens e tema. Assim que você preencher as informações necessárias (nome, mensagem e o link da imagem), esses textos serão substituidos...';
        } else {
            previewP.textContent = mensageInputValue;
        }
    })
    // --


    // Fonts Codes
    serifBtn.addEventListener('click', () => {
        serifBtn.style.border = '4px solid white';
        sansBtn.style.border = 'none';
        monoBtn.style.border = 'none';
        cursivaBtn.style.border = 'none';
        preview.style.background = '#ffebf0';
        previewCont.style.fontFamily = 'serif';
    })

    sansBtn.addEventListener('click', () => {
        sansBtn.style.border = '4px solid white';
        serifBtn.style.border = 'none';
        monoBtn.style.border = 'none';
        cursivaBtn.style.border = 'none';

        previewCont.style.fontFamily = 'Lucida Sans';
    });

    monoBtn.addEventListener('click', () => {
        monoBtn.style.border = '4px solid white';
        serifBtn.style.border = 'none';
        sansBtn.style.border = 'none';
        cursivaBtn.style.border = 'none';

        previewCont.style.fontFamily = 'monospace';
    });

    cursivaBtn.addEventListener('click', () => {
        cursivaBtn.style.border = '4px solid white';
        serifBtn.style.border = 'none';
        sansBtn.style.border = 'none';
        monoBtn.style.border = 'none';

        previewCont.style.fontFamily = 'cursive';
    })
    // --


    // Theme's codes
    whiteThemeBtn.addEventListener('click', () => {
        whiteThemeBtn.style.border = '4px solid white';
        nightThemeBtn.style.border = 'none';

        previewH2.style.color = '#4a4a4a';
        previewH3.style.color = '#d63384';
        previewP.style.color = '#000000';
        preview.style.background = '#ffebf0';
    });

    nightThemeBtn.addEventListener('click', () => {
        nightThemeBtn.style.border = '4px solid white';
        whiteThemeBtn.style.border = 'none';

        previewH2.style.color = '#ffd90070';
        previewH3.style.color = '#ffd700';
        previewP.style.color = '#e2e8f0';
        preview.style.background = '#0f172a';
    })

    // Visu Anim
    visuBtn.addEventListener('click', () => {
        if (visuBtn.textContent == 'Visualizar') {
            previewCont.style.animation = 'show 0.3s ease-in-out forwards';
            setTimeout(() => {
                visuBtn.textContent = 'Editor';
            }, 100);

        }

        if (visuBtn.textContent == 'Editor') {
            previewCont.style.animation = 'unshow 0.3s ease-in-out forwards';
            setTimeout(() => {
                visuBtn.textContent = 'Visualizar'
            }, 100);
        }
    })
    // --
})