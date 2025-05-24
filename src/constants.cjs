const CanvasArguments = {
    FILL: "FILL",
    FIT: "FIT"
};

const CharacterTag = {
    // -------------- Abydos ---------------- 阿拜多斯
    SHIROKO: {user: "shiroko", name: "Shiroko"},
    SHIROKO_SWIMSUIT: {user: "shiroko_swimsuit", name: "CH0188"},
    SHIROKO_RIDINGSUIT: {user: "shiroko_ridingsuit", name: "Shiroko_ridingsuit"},
    SHIROKO_TERROR: {user: "shiroko_terror", name: "CH0263"},
    SHIROKO_TERROR_LIGHT_WEAKENED: {user: "shiroko_terror_home_fix", name: "CH0263_home_fix"},
    SHIROKO_BD: {user: "shiroko_bd", name: "LobbyShiroko_multi", strict: true, V4: true},
    HOSHINO: {user: "hoshino", name: "Hoshino"},
    HOSHINO_SWIMSUIT: {user: "hoshino_swimsuit", name: "Hoshino_swimsuit"},
    HOSHINO_ARMED: {user: "hoshino_armed", name: "CH0258"},
    HOSHINO_BD: {user: "hoshino_bd", name: "LobbyHoshino_multi", strict: true, V4: true},
    NONOMI: {user: "nonomi", name: "Nonomi"},
    NONOMI_SWIMSUIT: {user: "nonomi_swimsuit", name: "CH0092"},
    NONOMI_BD: {user: "nonomi_bd", name: "LobbyNonomi_multi", strict: true, V4: true},
    AYANE: {user: "ayane", name: "Ayane"},
    AYANE_SWIMSUIT: {user: "ayane_swimsuit", name: "CH0176"},
    AYANE_BD: {user: "ayane_bd", name: "LobbyAyane_multi", strict: true, V4: true},
    SERIKA: {user: "serika", name: "Serika"},
    SERIKA_NEWYEAR: {user: "serika_newyear", name: "Serika_Newyear"},
    SERIKA_SWIMSUIT: {user: "serika_swimsuit", name: "CH0189"},
    SERIKA_BD: {user: "serika_bd", name: "LobbySerika_multi", strict: true, V4: true},
    // -------------- Gehenna ---------------- 格赫娜
    // Handyman 68 便利店68
    ARU: {user: "aru", name: "Aru"},
    ARU_NEWYEAR: {user: "aru_newyear", name: "Aru_newyear"},
    ARU_DRESS: {user: "aru_dress", name: "CH0240"},
    KAYOKO: {user: "kayoko", name: "Kayoko"},
    KAYOKO_NEWYEAR: {user: "kayoko_newyear", name: "CH0086"},
    KAYOKO_DRESS: {user: "kayoko_dress", name: "CH0239"},
    KAYOKO_DRESS_EXPOSURE_FIX: {user: "kayoko_dress_home_fix", name: "CH0239_home_fix"},
    KAYOKO_DRESS_LIGHT_WEAKENED: {user: "kayoko_dress_home_dark", name: "CH0239_home_dark"},
    KAYOKO_DRESS_LIGHT_REMOVED: {user: "kayoko_dress_home_deep", name: "CH0239_home_deep"},
    MUTSUKI: {user: "mutsuki", name: "Mutsuki"},
    MUTSUKI_NEWYEAR: {user: "mutsuki_newyear", name: "mutsuki_newyear"},
    HARUKA: {user: "haruka", name: "Haruka"},
    HARUKA_NEWYEAR: {user: "haruka_newyear", name: "CH0087"},
    // School Lunch Club 供给部
    FUUKA: {user: "fuuka", name: "Fuuka"},
    FUUKA_NEWYEAR: {user: "fuuka_newyear", name: "CH0177"},
    JURI: {user: "juri", name: "Juri"},
    JURI_PART_TIMER: {user: "juri_part_timer", name: "CH0286", V4: true}, // IMPL Implemented on 2025/02/26
    // Gourmet Research Society 美食研究会
    // 官方图册上写的是 Akashi Junko，但是模型扒下来就是 Zunko，为了消除歧义故两种标识符都添加在此
    JUNKO: {user: "junko", name: "Zunko"},
    ZUNKO: {user: "zunko", name: "Zunko"},
    JUNKO_NEWYEAR: {user: "junko_newyear", name: "CH0192"},
    ZUNKO_NEWYEAR: {user: "zunko_newyear", name: "CH0192"},
    HARUNA: {user: "haruna", name: "Haruna"},
    HARUNA_NEWYEAR: {user: "haruna_newyear", name: "CH0191"},
    HARUNA_GYM: {user: "haruna_gym", name: "CH0193"},
    IZUMI: {user: "izumi", name: "Izumi"},
    IZUMI_SWIMSUIT: {user: "izumi_swimsuit", name: "Izumi_swimsuit"},
    IZUMI_NEWYEAR: {user: "izumi_newyear", name: "CH0197", V4: true}, // IMPL Implemented on 2025/03/19
    AKARI: {user: "akari", name: "akari"},
    AKARI_BG: {user: "akari_bg", name: "akari_bg", strict: true},
    AKARI_SCENE: {user: "akari_scene", name: "akari_scene", strict: true}, // TODO Deprecate this
    AKARI_NEWYEAR: {user: "akari_newyear", name: "CH0196"},
    // Disciplinary Committee 风纪委员会
    HINA: {user: "hina", name: "Hina"},
    HINA_SWIMSUIT: {user: "hina_swimsuit", name: "CH0063"},
    HINA_DRESS: {user: "hina_dress", name: "CH0230"},
    AKO: {user: "ako", name: "Ako"},
    AKO_DRESS: {user: "ako_dress", name: "CH0231"},
    IORI: {user: "iori", name: "Iori"},
    IORI_SWIMSUIT: {user: "iori_swimsuit", name: "CH0064"},
    CHINATSU: {user: "chinatsu", name: "Chinatsu"},
    CHINATSU_HOTSPRING: {user: "chinatsu_hotspring", name: "CH0163"},
    // Pandemonium Society 万魔殿
    MAKOTO: {user: "makoto", name: "CH0079"},
    IROHA: {user: "iroha", name: "CH0156"},
    IBUKI: {user: "ibuki", name: "Ibuki"},
    CHIAKI: {user: "chiaki", name: "CH0238", V4: true}, // IMPL Implemented on 2024/11/20
    SATSUKI: {user: "satsuki", name: "CH0080", V4: true}, // IMPL Implemented on 2024/11/20
    // Hot Spring Development Department 温泉开发部
    KASUMI: {user: "kasumi", name: "CH0089"},
    MEGU: {user: "megu", name: "CH0088"},
    // Emergency Medicine Club 救急医学部
    SENA: {user: "sena", name: "CH0081"},
    SENA_CASUAL: {user: "sena_casual", name: "CH0082", V4: true}, // IMPL Implemented on 2025/02/26
    // Sparkle Club 亮闪闪部
    KIRARA: {user: "kirara", name: "Kirara"},
    // --------------- Trinity ----------------- 圣三一
    // Tea Party 茶话会
    MIKA: {user: "mika", name: "CH0069"},
    NAGISA: {user: "nagisa", name: "Nagisa"},
    SEIA: {user: "seia", name: "CH0070", V4: true}, // IMPL implemented on 2025/01/20
    // Sisterhood 姐妹会
    SAKURAKO: {user: "sakurako", name: "Sakurako"},
    SAKURAKO_IDOL: {user: "sakurako_idol", name: "CH0274", V4: true}, // IMPL implemented on 2024/10/23
    MARI: {user: "mari", name: "mari"},
    MARI_GYM: {user: "mari_gym", name: "CH0186"},
    MARI_IDOL: {user: "mari_idol", name: "CH0273", V4: true}, // IMPL implemented on 2024/10/23
    HINATA: {user: "hinata", name: "Hinata"},
    HINATA_SWIMSUIT: {user: "hinata_swimsuit", name: "CH0210"},
    // Justice Realization Committee 正义实现委员会
    // 小春划在了补习部下
    TSURUGI: {user: "tsurugi", name: "Tsurugi"},
    TSURUGI_SWIMSUIT: {user: "tsurugi_swimsuit", name: "CH0060", V4: true},
    HASUMI: {user: "hasumi", name: "Hasumi"},
    HASUMI_GYM: {user: "hasumi_gym", name: "CH0190"},
    MASHIRO: {user: "mashiro", name: "Mashiro"},
    MASHIRO_SWIMSUIT: {user: "mashiro_swimsuit", name: "Mashiro_swimsuit"},
    ICHIKA: {user: "ichika", name: "CH0071"},
    // Knights Hospitaller 救援骑士团
    MINE: {user: "mine", name: "CH0152"},
    MINE_IDOL: {user: "mine_idol", name: "CH0275", V4: true}, // IMPL implemented on 2024/10/23
    HANAE: {user: "hanae", name: "Hanae"},
    HANAE_CHRISTMAS: {user: "hanae_christmas", name: "CH0195"},
    SERINA: {user: "serina", name: "serina"},
    SERINA_CHRISTMAS: {user: "serina_christmas", name: "CH0194"},
    // Library Committee 图书委员会
    UI: {user: "ui", name: "CH0169"},
    UI_SWIMSUIT: {user: "ui_swimsuit", name: "CH0204"},
    SHIMIKO: {user: "shimiko", name: "Shimiko"},
    // After-School Sweets Club 放学后甜品部
    KAZUSA: {user: "kazusa", name: "kazusa"},
    KAZUSA_BAND: {user: "kazusa_band", name: "CH0250"},
    NATSU: {user: "natsu", name: "CH0155"},
    AIRI: {user: "airi", name: "Airi"},
    AIRI_BAND: {user: "airi_band", name: "CH0251"},
    YOSHIMI: {user: "yoshimi", name: "Yoshimi"},
    YOSHIMI_BAND: {user: "yoshimi_band", name: "CH0220"},
    // Trinity Vigilante Crew 圣三一自警团
    REISA: {user: "reisa", name: "CH0167"},
    SUZUMI: {user: "suzumi", name: "Suzumi"},
    // Supplementary Lessons Department 补习部
    KOHARU: {user: "koharu", name: "Koharu"},
    KOHARU_SWIMSUIT: {user: "koharu_swimsuit", name: "CH0205"},
    AZUSA: {user: "azusa", name: "Azusa"},
    AZUSA_SWIMSUIT: {user: "azusa_swimsuit", name: "Azusa_swimsuit"},
    // 官方图册为 Ajitani Hifumi 而非此处的 Hihumi，为消除歧义决定添加两个不同译名
    HIFUMI: {user: "hifumi", name: "Hihumi"},
    HIHUMI: {user: "hihumi", name: "Hihumi"},
    HIFUMI_SWIMSUIT: {user: "hifumi_swimsuit", name: "CH0058"},
    HIHUMI_SWIMSUIT: {user: "hihumi_swimsuit", name: "CH0058"},
    HANAKO: {user: "hanako", name: "Hanako"},
    HANAKO_SWIMSUIT: {user: "hanako_swimsuit", name: "CH0209"},
    // ------------- Millennium Science School --------------- 千年科学学院
    // Seminar 研讨会
    YUUKA: {user: "yuuka", name: "Yuuka"},
    YUUKA_GYM: {user: "yuuka_gym", name: "CH0184"},
    YUUKA_GYM_00: {user: "yuuka_gym_00", name: "CH0184_00", strict: true},
    YUUKA_PYJAMAS: {user: "yuuka_pyjamas", name: "CH0284", V4: true}, // IMPL Implemented on 2024/12/24
    NOA: {user: "noa", name: "CH0095"},
    NOA_PYJAMAS: {user: "noa_pyjamas", name: "CH0285", V4: true}, // IMPL Implemented on 2024/12/24
    KOYUKI: {user: "koyuki", name: "CH0198"},
    RIO: {user: "rio", name: "CH0158", V4: true}, // IMPL Implemented on 2025/01/27
    // Veritas 真理部
    CHIHIRO: {user: "chihiro", name: "CH0160"},
    MAKI: {user: "maki", name: "Maki"},
    MAKI_CAMP: {user: "maki_camp", name: "CH0235", V4: true}, // IMPL Implemented on 2025/02/12
    HARE: {user: "hare", name: "Hare"},
    HARE_CAMP: {user: "hare_camp", name: "CH0233"},
    KOTAMA: {user: "kotama", name: "Kotama"},
    KOTAMA_CAMP: {user: "kotama_camp", name: "CH0232"},
    // Cleaning & Clearing C&C
    NERU: {user: "neru", name: "Neru"},
    NERU_BUNNY: {user: "neru_bunny", name: "CH0101"},
    NERU_UNIFORM: {user: "neru_uniform", name: "CH0280", V4: true}, // IMPL Implemented on 2025/01/27
    ASUNA: {user: "asuna", name: "Asuna"},
    ASUNA_BUNNY: {user: "asuna_bunny", name: "CH0098"},
    ASUNA_UNIFORM: {user: "asuna_uniform", name: "CH0281", V4: true}, // IMPL Implemented on 2025/01/20
    KARIN: {user: "karin", name: "Karin"},
    KARIN_BUNNY: {user: "karin_bunny", name: "CH0100"},
    KARIN_UNIFORM: {user: "karin_uniform", name: "CH0282", V4: true}, // IMPL Implemented on 2025/01/20
    AKANE: {user: "akane", name: "Akane"},
    AKANE_BUNNY: {user: "akane_bunny", name: "CH0099"},
    TOKI: {user: "toki", name: "CH0187"},
    TOKI_BUNNY: {user: "toki_bunny", name: "CH0211"},
    // Paranormal Affairs Department 灵异现象搜查部
    HIMARI: {user: "himari", name: "CH0159"},
    EIMI: {user: "eimi", name: "Eimi"},
    EIMI_SWIMSUIT: {user: "eimi_swimsuit", name: "CH0219"},
    // Engineering Department 工程部
    UTAHA: {user: "utaha", name: "Utaha"},
    UTAHA_CHEERLEADER: {user: "utaha_cheerleader", name: "CH0182"},
    HIBIKI: {user: "hibiki", name: "Hibiki"},
    HIBIKI_CHEERLEADER: {user: "hibiki_cheerleader", name: "CH0181"},
    KOTORI: {user: "kotori", name: "Kotori"},
    KOTORI_CHEERLEADER: {user: "kotori_cheerleader", name: "CH0185"},
    // Gym Training Department 体育锻炼部
    SUMIRE: {user: "sumire", name: "Sumire"},
    SUMIRE_PART_TIMER: {user: "sumire_part_timer", name: "CH0287", V4: true}, // IMPL Implemented on 2025/03/26
    REI: {user: "rei", name: "CH0245", V4: true}, // IMPL Implemented on 2025/03/26
    // Game Development Department 游戏开发部
    MIDORI: {user: "midori", name: "Midori"},
    MIDORI_MAID: {user: "midori_maid", name: "CH0202"},
    MOMOI: {user: "momoi", name: "Momoi"},
    MOMOI_MAID: {user: "momoi_maid", name: "CH0201"},
    ARIS: {user: "aris", name: "Aris"},
    ARIS_MAID: {user: "aris_maid", name: "CH0200"},
    YUZU: {user: "yuzu", name: "Yuzu"},
    YUZU_MAID: {user: "yuzu_maid", name: "CH0203"},
    // ------------------- Hyakkiyako -------------------- 百鬼夜行
    // Yin-Yang Club 阴阳部
    KAHO: {user: "kaho", name: "CH0107"},
    CHISE: {user: "chise", name: "Chise"},
    CHISE_SWIMSUIT: {user: "chise_swimsuit", name: "CH0178"},
    NIYA: {user: "niya", name: "CH0109", V4: true}, // IMPL Implemented on 2025/05/21
    // Hyakkaryouran Conflict Resolution Council 百花缭乱调停委员会
    RENGE: {user: "renge", name: "CH0224"},
    KIKYOU: {user: "kikyou", name: "CH0225"},
    YUKARI: {user: "yukari", name: "CH0161"},
    NAGUSA: {user: "nagusa", name: "CH0222", V4: true}, // IMPL Implemented on 2025/05/21
    // Festival Management Committee 节庆营运管理部
    SHIZUKO: {user: "shizuko", name: "Shizuko"},
    SHIZUKO_SWIMSUIT: {user: "shizuko_swimsuit", name: "CH0180"},
    PINA: {user: "pina", name: "Pina"},
    PINA_GUIDE: {user: "pina_guide", name: "CH0257", V4: true}, // IMPL Implemented on 2025/05/14
    UMIKA: {user: "umika", name: "CH0110"},
    // Etiquette Training Society 修行部
    TSUBAKI: {user: "tsubaki", name: "Tsubaki"},
    TSUBAKI_GUIDE: {user: "tsubaki_guide", name: "CH0255"},
    MIMORI: {user: "mimori", name: "Mimori"},
    MIMORI_SWIMSUIT: {user: "mimori_swimsuit", name: "CH0183"},
    KAEDE: {user: "kaede", name: "Kaede"},
    // Ninjutsu Research Department 忍术研究部
    MICHIRU: {user: "michiru", name: "CH0113"},
    IZUNA: {user: "izuna", name: "Izuna"},
    IZUNA_SWIMSUIT: {user: "izuna_swimsuit", name: "CH0179"},
    TSUKUYO: {user: "tsukuyo", name: "CH0114"},
    // Seven Prisoners 七囚人
    WAKAMO: {user: "wakamo", name: "Wakamo"},
    WAKAMO_SCENE_0: {user: "wakamo_scene_0", name: "Wakamo_Scene_0", strict: true},
    WAKAMO_SWIMSUIT: {user: "wakamo_swimsuit", name: "CH0175"},
    // ------------------ Shanhaijing ------------------ 山海经
    // Xuanlong Office 玄龙门
    KISAKI: {user: "kisaki", name: "CH0139"}, // IMPL implemented on 2024/09/25
    MINA: {user: "mina", name: "CH0138"},
    // Xuanwu Merchant Association 玄武商会
    RUMI: {user: "rumi", name: "CH0135"},
    // 多读音消歧
    REIJO: {user: "reijo", name: "reizyo"}, // IMPL implemented on 2024/09/25
    REIZYO: {user: "reizyo", name: "reizyo"},
    // Chinese Alchemy Study Club 炼丹术研究会
    SAYA: {user: "saya", name: "Saya"},
    SAYA_CASUAL: {user: "saya_casual", name: "Saya_casual"},
    // Plum Blossom Garden 梅花园
    SHUN: {user: "shun", name: "Shun"},
    SHUN_YOUNG: {user: "shun_young", name: "CH0066"},
    KOKONA: {user: "kokona", name: "CH0137"},
    // ------------------- Red Winter ----------------------- 红冬
    // Red Winter Office 红冬事务局
    CHERINO: {user: "cherino", name: "Cherino"},
    CHERINO_HOTPSRING: {user: "cherino_hotspring", name: "CH0164"},
    TOMOE: {user: "tomoe", name: "Tomoe"},
    TOMOE_QIPAO: {user: "tomoe_qipao", name: "CH0271"},
    MARINA: {user: "marina", name: "Marina"},
    MARINA_QIPAO: {user: "marina_qipao", name: "CH0270"},
    // Public Works Department 劳务部
    MINORI: {user: "minori", name: "CH0214"},
    // Knowledge Liberation Front 知识解放战线
    MERU: {user: "meru", name: "CH0124"},
    MOMIJI: {user: "momiji", name: "momiji"},
    // No.227 Special Class 227特别班
    NODOKA: {user: "nodoka", name: "Nodoka"},
    NODOKA_HOTSPRING: {user: "nodoka_hotspring", name: "CH0165"},
    SHIGURE: {user: "shigure", name: "Shigure"},
    SHIGURE_00: {user: "shigure_00", name: "Shigure_00", strict: true},
    SHIGURE_01: {user: "shigure_01", name: "Shigure_01", strict: true},
    SHIGURE_HOTSPRING: {user: "shigure_hotspring", name: "CH0123"},
    // --------------------- Valkyrie --------------------- 瓦尔基里
    // Public Security Bureau 公安局
    KANNA: {user: "kanna", name: "CH0170"},
    KANNA_SWIMSUIT: {user: "kanna_swimsuit", name: "CH0260"},
    // Community Safety Bureau 生活安全局
    KIRINO: {user: "kirino", name: "Kirino"},
    KIRINO_SWIMSUIT: {user: "kirino_swimsuit", name: "CH0262"},
    FUBUKI: {user: "fubuki", name: "CH0141"},
    FUBUKI_SWIMSUIT: {user: "fubuki_swimsuit", name: "CH0261"},
    FUBUKI_SWIMSUIT_LIGHT_WEAKENED: {user: "fubuki_swimsuit_home_fix", name: "CH0261_home_fix2"},
    // ---------------------- Arius ----------------------- 阿里乌斯
    // 白洲梓划在圣三一下
    ATSUKO: {user: "atsuko", name: "Atsuko"},
    ATSUKO_SWIMSUIT: {user: "atsuko_swimsuit", name: "CH0267"},
    ATSUKO_SWIMSUIT_LIGHT_WEAKENED: {user: "atsuko_swimsuit_home_fix", name: "CH0267_home_fix"},
    SAORI: {user: "saori", name: "Saori"},
    SAORI_SWIMSUIT: {user: "saori_swimsuit", name: "CH0266"},
    SAORI_DRESS: {user: "saori_dress", name: "CH0259", V4: true}, // IMPL Implemented on 2025/04/09
    HIYORI: {user: "hiyori", name: "Hiyori"},
    HIYORI_SWIMSUIT: {user: "hiyori_swimsuit", name: "CH0269"},
    HIYORI_SWIMSUIT_LIGHT_WEAKENED: {user: "hiyori_swimsuit_home_fix", name: "CH0269_home_fix"},
    MISAKI: {user: "misaki", name: "Misaki"},
    // ----------------------- SRT -------------------------
    // RABBIT Platoon RABBIT小队
    MIYAKO: {user: "miyako", name: "Miyako"},
    MIYAKO_SWIMSUIT: {user: "miyako_swimsuit", name: "CH0215"},
    MIYU: {user: "miyu", name: "CH0145"},
    MIYU_SWIMSUIT: {user: "miyu_swimsuit", name: "CH0218"},
    SAKI: {user: "saki", name: "CH0144"},
    SAKI_SWIMSUIT: {user: "saki_swimsuit", name: "CH0217"},
    MOE: {user: "moe", name: "Moe"},
    MOE_SWIMSUIT: {user: "moe_swimsuit", name: "CH0216"},
    // -------------------- Highlander ---------------------- 海兰德
    // CCC 中央管制中心
    HIKARI: {user: "hikari", name: "CH0242", V4: true}, // IMPL implemented on 2025/04/22
    NOZOMI: {user: "nozomi", name: "CH0243", V4: true}, // IMPL implemented on 2025/04/22
    // 货物输送管理部
    AOBA: {user: "aoba", name: "CH0288", V4: true}, // IMPL implemented on 2025/04/22
    // ------------ Somewhere Outside Kivotos ------------ 联动角色
    // VOCALOID V家
    MIKU: {user: "miku", name: "CH9999"},
    // Academy City 学园都市
    MIKOTO: {user: "mikoto", name: "CH9998"},
    SHOKUHOU_MISAKI: {user: "shokuhou_misaki", name: "CH9997"}, // 食蜂操祈和阿里乌斯的戒野美咲撞名了，故前者只能通过全名查询
    RUIKO: {user: "ruiko", name: "CH0996"},
}

function queryByName(name) {
    if (name === null) return;
    if ((name.includes('reijo') || name.includes('reizyo')) && name.includes('fix')) {
        console.log(`Found: reizyo_home_fix from Key: ${name}`);
        return [`./assets/reizyo_home_fix/reizyo_home.skel`, false];
    }
    for (let i in CharacterTag) {
        if (CharacterTag[i]['user'].toLowerCase() === name.toLowerCase() || CharacterTag[i]['name'].toLowerCase() === name.toLowerCase()) {
            let res = CharacterTag[i]['name'];
            if (CharacterTag[i]['strict'] === undefined && res.indexOf('_home') === -1) res += '_home';
            return [`./assets/${res}/${res}.skel`, CharacterTag[i]["V4"]];
        }
    }
    throw new Error(`Error when querying with name: ${name}! Please check your input`);
}

export {
    CharacterTag,
    queryByName,
    CanvasArguments
}
