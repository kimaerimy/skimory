export const PRODUCT_CATEGORIES: ProductCategories = {
  CLEANSING: {
    label: "클렌징",
    subCategories: {
      CLEANSING_FOAM: "클렌징 폼",
      CLEANSING_OIL: "클렌징 오일",
      CLEANSING_MILK: "클렌징 밀크",
      CLEANSING_WATER: "클렌징 워터",
      CLEANSING_BALM: "클렌징 밤",
      CLEANSING_GEL: "클렌징 젤",
      CLEANSING_CREAM: "클렌징 로션/크림",
      CLEANSING_SOAP: "클렌징 비누",
    },
  },
  SKINCARE: {
    label: "스킨케어",
    subCategories: {
      TONER: "스킨/토너",
      LOTION: "로션/에멀젼",
      SERUM: "에센스/앰플/세럼",
      CREAM: "크림",
      PAD: "스킨/토너 패드",
      MIST: "미스트",
    },
  },
  SPECIAL_CARE: {
    label: "특별관리",
    subCategories: {
      MASK: "마스크팩",
      WASHOFF_PACK: "워시오프팩",
      SLEEPING_PACK: "수면팩",
      PEELOFF_PACK: "필오프팩",
    },
  },
};

export const PRODUCT_EVALUATION_OPTION_DATA: ProductEvaluationOption = {
  CLEANSING: {
    irritation: { label: "자극", type: "NEGATIVE" },
    comedogenic: { label: "트러블 유발", type: "NEGATIVE" },
    cleansing: { label: "세정력", type: "POSITIVE" },
    moisturizing: { label: "보습", type: "POSITIVE" },
    ux: { label: "사용감", type: "POSITIVE" },
  },
  SKINCARE: {
    irritation: { label: "자극", type: "NEGATIVE" },
    comedogenic: { label: "트러블 유발", type: "NEGATIVE" },
    absorption: { label: "흡수력", type: "POSITIVE" },
    moisturizing: { label: "보습", type: "POSITIVE" },
    oiliness: { label: "유분", type: "NEGATIVE" },
    ux: { label: "사용감", type: "POSITIVE" },
  },
  SPECIAL_CARE: {
    irritation: { label: "자극", type: "NEGATIVE" },
    comedogenic: { label: "트러블 유발", type: "NEGATIVE" },
    absorption: { label: "흡수력", type: "POSITIVE" },
    effect: { label: "효과", type: "POSITIVE" },
    ux: { label: "사용감", type: "POSITIVE" },
  },
};
