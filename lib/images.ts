/**
 * On-brand campaign imagery generated for Stellar HealthCare Staffing
 * (realistic, warm, navy/teal-graded editorial photography of diverse RNs,
 * RPNs, and PSWs with clients in home, hospital, and pediatric settings).
 *
 * These are served today from the generation platform's asset CDN. Before
 * launch, download each file and self-host it under /public/images (see
 * README.md → "Swapping placeholder images") so the site does not depend
 * on a third-party CDN for production assets.
 */
export type CampaignImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const campaignImages = {
  heroHome: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_3GHeym8zFcW8bPwweVke9vdUrGE/hf_20260805_170805_50fab63e-2dfa-446f-923f-513cca3ad761.png",
    width: 1856,
    height: 2304,
    alt: "A Registered Nurse in navy-and-teal scrubs sitting beside an elderly client on a couch in a bright home living room, mid-conversation.",
  },
  serviceHospital: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_3GHeym8zFcW8bPwweVke9vdUrGE/hf_20260805_170805_f3727d2e-1c9f-4c12-86b2-6bfc39c3cab4.png",
    width: 2400,
    height: 1792,
    alt: "A Registered Practical Nurse reviewing a chart with a senior patient alongside a colleague in a long-term care facility hallway.",
  },
  serviceHomeCare: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_3GHeym8zFcW8bPwweVke9vdUrGE/hf_20260805_170805_5461fb31-271f-40b6-92cf-d2a543de2819.png",
    width: 2400,
    height: 1792,
    alt: "A Personal Support Worker helping a senior man prepare tea together in a bright home kitchen.",
  },
  servicePediatric: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_3GHeym8zFcW8bPwweVke9vdUrGE/hf_20260805_170806_b42d3176-2ccf-4b61-9b2c-a8146c1586fc.png",
    width: 2400,
    height: 1792,
    alt: "A pediatric nurse kneeling to talk with a smiling young child in a bright, welcoming clinic room.",
  },
  servicePalliative: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_3GHeym8zFcW8bPwweVke9vdUrGE/hf_20260805_170806_a7c34803-bb4c-4a17-bd91-6af8d64cc4e2.png",
    width: 2400,
    height: 1792,
    alt: "A caregiver gently holding the hand of an elderly patient resting comfortably at home.",
  },
  aboutTeam: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_3GHeym8zFcW8bPwweVke9vdUrGE/hf_20260805_170805_090bca83-5ee3-481f-80d4-38eaf7b9f8cb.png",
    width: 2528,
    height: 1696,
    alt: "Five diverse healthcare professionals in navy and teal scrub uniforms standing together in a bright modern clinic corridor.",
  },
  ctaBand: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_3GHeym8zFcW8bPwweVke9vdUrGE/hf_20260805_170805_4ff04bb5-4fd8-44d4-ad18-9195076d016e.png",
    width: 3168,
    height: 1344,
    alt: "",
  },
} satisfies Record<string, CampaignImage>;
