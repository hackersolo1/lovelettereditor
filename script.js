document.addEventListener("DOMContentLoaded", () => {
    // Header const's
    const headerTitle = document.querySelector("#header-title");
    const downloadBtn = document.querySelector('.downloadBtn');
    const visuBtn = document.querySelector(".visu");
    // --


    // Input's const's
    const parcInput = document.querySelector("#nameParc");
    const mensageInput = document.querySelector("#mensageText");
    const imageInput = document.querySelector("#imgUrl");
    const musicInput = document.querySelector("#musicUrl");
    // --


    // Theme's const's
    const whiteThemeBtn = document.querySelector(".white-theme");
    const nightThemeBtn = document.querySelector(".night-theme");
    const customThemeBtn = document.querySelector('.custom-theme');
    // --


    // Font's const's
    const serifBtn = document.querySelector(".serif");
    const sansBtn = document.querySelector(".sans");
    const monoBtn = document.querySelector(".mono");
    const cursivaBtn = document.querySelector(".cursiva");
    // --


    // Preview const's
    const previewCont = document.querySelector(".preview-cont");
    const preview = document.querySelector(".preview");
    const previewImg = document.querySelector(".preview img");
    const previewH2 = document.querySelector(".preview h2");
    const previewH3 = document.querySelector(".preview h3");
    const previewP = document.querySelector(".preview p");
    // --


    // Custom theme const's
    const customThemeTitleWindow = document.querySelector('.custom-title-window');
    const customThemeSubtitleWindow = document.querySelector('.custom-subtitle-window');
    const customThemeMensageWindow = document.querySelector('.custom-mensage-window');
    const customThemeBackgroundWindow = document.querySelector('.custom-background-window');

    const customTitle = document.querySelector('.custom-title-window h2');
    const customSubtitle = document.querySelector('.custom-subtitle');
    const customMensage = document.querySelector('.custom-mensage');
    const customBackground = document.querySelector('.custom-background');
    
    const customTitleColorInput = document.querySelector('#custom-title-color-input');
    const customSubtitleColorInput = document.querySelector('.custom-subtitle-color-input');
    const customMensageColorInput = document.querySelector('.custom-mensage-color-input');
    const customBackgroundColorInput = document.querySelector('.custom-background-color-input');

    const customThemeBtnClose1 = document.querySelector('.custom-theme-btn-1-5');
    const customThemeBtnClose2 = document.querySelector('.custom-theme-btn-2-5');
    const customThemeBtnClose3 = document.querySelector('.custom-theme-btn-3-5');

    const customThemeBtnNext = document.querySelector('.custom-theme-btn-1');
    const customThemeBtnNext2 = document.querySelector('.custom-theme-btn-2');
    const customThemeBtnNext3 = document.querySelector('.custom-theme-btn-3');
    
    const customThemeBtnEnd = document.querySelector('.custom-theme-btn-4');
    // --


    

    // Default code
    serifBtn.style.border = "4px solid white";
    sansBtn.style.border = " 4px solid rgb(0, 35, 114)";
    monoBtn.style.border = "4px solid rgb(0, 35, 114)";
    cursivaBtn.style.border = "4px solid rgb(0, 35, 114)";

    previewCont.style.fontFamily = "serif";

    whiteThemeBtn.style.border = "4px solid black";

    previewH2.style.color = "#4a4a4a";
    previewH3.style.color = "#d63384";
    previewP.style.color = "#2d2d2d";

    downloadBtn.style.display = 'none';

    preview.style.borderRadius = '20px';

    customTitle.style.fontFamily = 'serif';
    customSubtitle.style.fontFamily = 'serif';
    customMensage.style.fontFamily = 'serif';
    customBackground.style.fontFamily = 'serif';
    // --


    // Input's code's
    parcInput.addEventListener("input", () => {
        const parcInputValue = parcInput.value;
        if (parcInputValue == "") {
            previewH3.textContent = "O nome ficará assim";
            customSubtitle.textContent = 'O nome ficará assim';
        } else {
            previewH3.textContent = parcInputValue;
            customSubtitle.textContent = parcInputValue;
        }
    });

    mensageInput.addEventListener("input", () => {
        const mensageInputValue = mensageInput.value;
        if (mensageInputValue == "") {
            previewP.textContent =
                "Esse texto é apenas uma alternativa para que você possa testar as fontes, imagens e tema. Assim que você preencher as informações necessárias (nome, mensagem e o link da imagem), esses textos serão substituidos...";
        } else {
            previewP.textContent = mensageInputValue;
        }
    });
    // --


    // Fonts Codes
    serifBtn.addEventListener("click", () => {
        serifBtn.style.border = "4px solid white";
        sansBtn.style.border = " 4px solid rgb(0, 35, 114)";
        monoBtn.style.border = "4px solid rgb(0, 35, 114)";
        cursivaBtn.style.border = "4px solid rgb(0, 35, 114)";

        previewCont.style.fontFamily = "serif";

        customTitle.style.fontFamily = 'serif';
        customSubtitle.style.fontFamily = 'serif';
        customMensage.style.fontFamily = 'serif';
        customBackground.style.fontFamily = 'serif';
    });

    sansBtn.addEventListener("click", () => {
        sansBtn.style.border = "4px solid white";
        serifBtn.style.border = "4px solid rgb(0, 35, 114)";
        monoBtn.style.border = "4px solid rgb(0, 35, 114)";
        cursivaBtn.style.border = "4px solid rgb(0, 35, 114)";

        previewCont.style.fontFamily = "Lucida Sans";

        customTitle.style.fontFamily = 'Lucida Sans';
        customSubtitle.style.fontFamily = 'Lucida Sans';
        customMensage.style.fontFamily = 'Lucida Sans';
        customBackground.style.fontFamily = 'Lucida Sans';
    });

    monoBtn.addEventListener("click", () => {
        monoBtn.style.border = "4px solid white";
        serifBtn.style.border = "4px solid rgb(0, 35, 114)";
        sansBtn.style.border = "4px solid rgb(0, 35, 114)";
        cursivaBtn.style.border = "4px solid rgb(0, 35, 114)";

        previewCont.style.fontFamily = "monospace";

        customTitle.style.fontFamily = 'monospace';
        customSubtitle.style.fontFamily = 'monospace';
        customMensage.style.fontFamily = 'monospace';
        customBackground.style.fontFamily = 'monospace';
    });

    cursivaBtn.addEventListener("click", () => {
        cursivaBtn.style.border = "4px solid white";
        serifBtn.style.border = "4px solid rgb(0, 35, 114)";
        sansBtn.style.border = "4px solid rgb(0, 35, 114)";
        monoBtn.style.border = "4px solid rgb(0, 35, 114)";

        previewCont.style.fontFamily = "cursive";

        customTitle.style.fontFamily = 'cursive';
        customSubtitle.style.fontFamily = 'cursive';
        customMensage.style.fontFamily = 'cursive';
        customBackground.style.fontFamily = 'cursive';
    });
    // --


    // Theme's codes
    whiteThemeBtn.addEventListener("click", () => {
        whiteThemeBtn.style.border = "4px solid black";
        nightThemeBtn.style.border = "4px solid #0f172a";
        customThemeBtn.style.border = '4px solid rgb(0, 35, 114)';;

        previewH2.style.color = "#4a4a4a";
        previewH3.style.color = "#d63384";
        previewP.style.color = "#000000";
        preview.style.background = "#ffebf0";
    });

    nightThemeBtn.addEventListener("click", () => {
        nightThemeBtn.style.border = "4px solid white";
        whiteThemeBtn.style.border = "4px solid #ffebf0";
        customThemeBtn.style.border = '4px solid rgb(0, 35, 114)';

        previewH2.style.color = "#ffd90070";
        previewH3.style.color = "#ffd700";
        previewP.style.color = "#e2e8f0";
        preview.style.background = "#0f172a";
    });


    // Visu Anim
    visuBtn.addEventListener("click", () => {
        if (visuBtn.textContent == "Visualizar") {
            previewCont.style.animation = "show 0.3s ease-in-out forwards";
            downloadBtn.style.display = 'flex';
            setTimeout(() => {
                visuBtn.textContent = "Editor";
            }, 100);
        }

        if (visuBtn.textContent == "Editor") {
            previewCont.style.animation = "unshow 0.3s ease-in-out forwards";
            downloadBtn.style.display = 'none';
            setTimeout(() => {
                visuBtn.textContent = "Visualizar";
            }, 100);
        }
    });
    // --


    // Download Code 
    downloadBtn.addEventListener('click', () => {
        preview.style.borderRadius = '0px';
        preview.style.height = 'auto';
        html2canvas(preview).then(canvas => {
            const img = canvas.toDataURL('imagem/png');
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = img;
                link.download = 'carta-personalizada.png';
                link.click();
            }, 100);
        });

        setTimeout(() => {
            preview.style.borderRadius = '20px';
            preview.style.height = '100%'
        }, 200);
    });
    // --


    // Custom Theme Code's

    // - Custom theme Btn's code's
    customThemeBtn.addEventListener('click', () => {
        whiteThemeBtn.style.border = '4px solid white';
        nightThemeBtn.style.border = '4px solid #0f172a';
        customThemeBtn.style.border = '4px solid white';

        customThemeTitleWindow.style.animation = 'show2 0.3s ease-in-out forwards';

        const customTitleColorInputValue = customTitleColorInput.value;
        const customSubtitleColorInputValue = customSubtitleColorInput.value;
        const customMensageColorInputValue = customMensageColorInput.value;
        const customBackgroundColorInputValue = customBackgroundColorInput.value;

        previewH2.style.color = customTitleColorInputValue;
        previewH3.style.color = customSubtitleColorInputValue;
        previewP.style.color = customMensageColorInputValue;
        preview.style.background = customBackgroundColorInputValue;
    });
   
    customThemeBtnNext.addEventListener('click', () => {
        customThemeTitleWindow.style.animation = 'unshow2 0.3s ease-in-out forwards';
        setTimeout(() => {
            customThemeSubtitleWindow.style.animation = 'show2 0.3s ease-in-out forwards';
        }, 400);
    });

    customThemeBtnNext2.addEventListener('click', () => {
        customThemeSubtitleWindow.style.animation = 'unshow2 0.3s ease-in-out forwards';
        setTimeout(() => {
            customThemeMensageWindow.style.animation = 'show2 0.3s ease-in-out forwards';
        }, 400);
    });

    customThemeBtnNext3.addEventListener('click', () => {
        customThemeMensageWindow.style.animation = 'unshow2 0.3s ease-in-out forwards';
        setTimeout(() => {
            customThemeBackgroundWindow.style.animation = 'show2 0.3s ease-in-out forwards';
        }, 400);
    });

    customThemeBtnEnd.addEventListener('click', () => {
        customThemeBackgroundWindow.style.animation = 'unshow2 0.3s ease-in-out forwards';
    })
    // ---

    
    // - Custom theme input's code's
    customTitleColorInput.addEventListener('input', () => {
        const customTitleColorInputValue = customTitleColorInput.value;

        customTitle.style.color = customTitleColorInputValue;
        previewH2.style.color = customTitleColorInputValue;
    });

    customSubtitleColorInput.addEventListener('input', () => {
        const customSubtitleColorInputValue = customSubtitleColorInput.value;

        customSubtitle.style.color = customSubtitleColorInputValue;
        previewH3.style.color = customSubtitleColorInputValue;
    });

    customMensageColorInput.addEventListener('input', () => {
        const customMensageColorInputValue = customMensageColorInput.value;

        customMensage.style.color = customMensageColorInputValue;
        previewP.style.color = customMensageColorInputValue;
    });

    customBackgroundColorInput.addEventListener('input', () => {
        const customBackgroundColorInputValue = customBackgroundColorInput.value;

        customBackground.style.color = customBackgroundColorInputValue;
        preview.style.background = customBackgroundColorInputValue;
    })
    // ---


    // - Custom theme close btn's
    customThemeBtnClose1.addEventListener('click', () => {
        customThemeTitleWindow.style.animation = 'unshow2 0.3s ease-in-out forwards';
    });

    customThemeBtnClose2.addEventListener('click', () => {
        customThemeSubtitleWindow.style.animation = 'unshow2 0.3s ease-in-out forwards';
    });

    customThemeBtnClose3.addEventListener('click', () => {
        customThemeMensageWindow.style.animation = 'unshow 0.3s ease-in-out forwards';
    });
    // ---


    // Img code's 
    imageInput.addEventListener('change', () => {
        const file = imageInput.files[0];
        const link = URL.createObjectURL(file);      
        previewImg.src = link;
    });
    // --
});