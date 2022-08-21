const common = {
    colors: {
        themeSwitcherButton: {
            light: {
                bg: "#000000",
                icon: "#FFFFFF"
            },
            dark: {
                bg: "#FFFFFF",
                icon: "#000000"
            }
        }
    },
    fonts: {
        secondary: "'Poppins', sans-serif",
    }
}

export const light = {
    name: "light-theme",
    fonts: {
        ...common.fonts
    },
    colors: {
        ...common.colors,
        bgBody: "#FFFFFF",
        bgContrast: "#000000",
        logo: "#000000",

        textPrimary: "#000000",
        textContrast: "#FFFFFF",
        textPlaceholder: "#DFE5EB",
        textSecondary: "#838B93",
        textSuccess: "#52DAA9",
        textDanger: "#FF0C0C",

        bgBadge: "#FFD43D",

        betBox: {
            borderPrimary: "#F4F6F8",
            borderSuccess: "rgba(82, 218, 169, 0.21)",
            borderSecondary: "#F4F6F8",

            bgPrimary: "#FFFFFF",
            bgSecondary: "#F4F6F8",
            bgSuccess: "rgba(82, 218, 169, 0.21)",

            text: "#000000",
            textSuccess: "#52DAA9",
        },

        table: {
            bookHeaderText: "#000000",
            bg: "#FFFFFF",
            border: "#DFE5EB",
            bgTh: "#F4F6F8",
        },

        headerControls: {
            bg: "#F4F6F8",
            bgHover: "#000000",
            icon: "#000000",
            iconHover: "#FFFFFF",
            starStroke: "#000000",
            starStrokeHover: "#FFFFFF",
            starBg: "transparent",
        },

        drawer: {
            bg: '#F4F6F8',
            itemBg: '#ffffff',
            itemBgSelected: '#000000',
            textSelected: '#ffffff',
            groupBgSelected: '#2d2d2d',
        },

        opportunity: {
            textSecondary: "#838B93"
        }

    },
};

export const dark = {
    name: "dark-theme",
    fonts: {
        ...common.fonts
    },
    colors: {
        ...common.colors,
        bgBody: "#0C0B0E",
        bgContrast: "#FFFFFF",
        logo: "#FFFFFF",

        textPrimary: "#FFFFFF",
        textContrast: "#000000",
        textPlaceholder: "#DFE5EB",
        textSecondary: "#838B93",
        textSuccess: "#52DAA9",
        textDanger: "#FF0C0C",

        bgBadge: "#FFD43D",

        betBox: {
            borderPrimary: "#2C3844",
            borderSuccess: "rgba(82, 218, 169, 0.21)",
            borderSecondary: "#2C3844",

            bgPrimary: "#0C0B0E",
            bgSecondary: "#0C0B0E",
            bgSuccess: "rgba(82, 218, 169, 0.21)",

            text: "#FFFFFF",
            textSuccess: "#52DAA9",
        },

        table: {
            bookHeaderText: "#90969C",
            bg: "#0C0B0E",
            border: "#2C3844",
            bgTh: "#161A1E",
        },

        headerControls: {
            bg: "#1E2429",
            bgHover: "#1E2429",
            icon: "#90969C",
            iconHover: "#90969C",
            starStroke: "#90969C",
            starBg: "#90969C",
            starStrokeHover: "#90969C",
        },

        drawer: {
            bg: '#161A1E',
            itemBg: '#1E2429',
            itemBgSelected: '#000000',
            textSelected: '#ffffff',
            groupBgSelected: '#1E2429',
        },

        opportunity: {
            textSecondary: "#838B93"
        }
    },
};