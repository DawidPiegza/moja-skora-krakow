import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("views/AppContainer/AppContainer.tsx"),
  route("/our_team", "./views/AboutUsView/AboutUsView.tsx"),
  route("/price_list", "./views/PriceListView/PriceListView.tsx"),
  route("/contact", "./views/ContactView/ContactView.tsx"),
  route("/statute", "./views/StatueView/StatueView.tsx"),
  route("/voucher_statute", "./views/VoucherStatueView/VoucherStatueView.tsx"),
  route("/voucher", "./views/ClinicVoucherView/ClinicVoucherView.tsx"),
  route("/promotions", "./views/PromotionsView/PromotionsView.tsx"),
  route(
    "/promotions_terms_and_conditions",
    "./views/PromotionsTermsAndConditionsView/PromotionsTermsAndConditionsView.tsx"
  ),

  route(
    "/consultation",
    "./views/Consultation/ConsultationServiceView/ConsultationServiceView.tsx"
  ),
  route(
    "/pregnancy_treatments",
    "./views/PregnancyTreatmentView/PregnancyTreatmentsView.tsx"
  ),
  route(
    "/eyebrow_and_eyelash_styling",
    "./views/EyebrowAndEyelashStylingCategoryView/EyebrowAndEyelashStylingCategoryView.tsx"
  ),
  route(
    "/eyebrow_and_eyelash_styling/eyebrow_lamination",
    "./views/EyebrowAndEyelashStyling/EyebrowLaminationView/EyebrowLaminationView.tsx"
  ),
  route(
    "/eyebrow_and_eyelash_styling/lash_lift",
    "./views/EyebrowAndEyelashStyling/LashLiftView/LashLiftView.tsx"
  ),
  route(
    "/permanent_makeup",
    "./views/PermanentMakeupCategoryView/PermanentMakeupCategoryView.tsx"
  ),
  route(
    "/permanent_makeup/permanent_eyebrow_makeup",
    "./views/PernamentMakeup/PermanentEyebrowMakeupView/PermanentEyebrowMakeupView.tsx"
  ),
  route(
    "/permanent_makeup/permanent_lip_makeup",
    "./views/PernamentMakeup/PermanentLipMakeupView/PermanentLipMakeupView.tsx"
  ),
  route(
    "/lip_shaping",
    "./views/LipsShapingCategoryView/LipsShapingCategoryView.tsx"
  ),
  route(
    "/lip_shaping/lip_augmentation_and_contouring",
    "./views/LipShaping/LipAugmentationAndContouringView/LipAugmentationAndContouringView.tsx"
  ),
  route(
    "/cosmetology",
    "./views/CosmetologyCategoryView/CosmetologyCategoryView.tsx"
  ),
  route(
    "/cosmetology/dr_cyj_filler_mesotherapy",
    "./views/Cosmetology/DrCyjFillerView/DrCyjFillerView.tsx"
  ),
  route(
    "/cosmetology/hair_growth_mesotherapy",
    "./views/Cosmetology/HairGrowthMesotherapy/HairGrowthMesotherapy.tsx"
  ),
  route(
    "/cosmetology/needle_mesotherapy",
    "./views/Cosmetology/NeedleMesotherapyView/NeedleMesotherapyView.tsx"
  ),
  route(
    "/cosmetology/nanofrax_mesotherapy",
    "./views/Cosmetology/NanofraxMesotherapyView/NanofraxMesotherapyView.tsx"
  ),
  route(
    "/cosmetology/nanofrax_nano_needle_mesotherapy",
    "./views/Cosmetology/NanofraxNanoNeedleMesotherapy/NanofraxNanoNeedleMesotherapy.tsx"
  ),
  route(
    "/cosmetology/cavitation_peeling",
    "./views/Cosmetology/CavitationPeelingView/CavitationPeelingView.tsx"
  ),
  route(
    "/cosmetology/carbon_peel",
    "./views/Cosmetology/CarbonPeelView/CarbonPeelView.tsx"
  ),
  route(
    "/cosmetology/tissue_stimulators",
    "./views/Cosmetology/TissueStimulatorsView/TissueStimulatorsView.tsx"
  ),
  route(
    "/cosmetology/laser_removal_of_permanent_makeup_and_tattoos",
    "./views/Cosmetology/LaserRemovalOfPermanentMakeupAndTattoosView/LaserRemovalOfPermanentMakeupAndTattoosView.tsx"
  ),
  route(
    "/cosmetology/pca_skin_therapeutic_treatments_for_the_face",
    "./views/Cosmetology/PcaSkinView/PcaSkinView.tsx"
  ),
  route(
    "/cosmetology/oxygenating_trio",
    "./views/Cosmetology/OxygenatingTrioView/OxygenatingTrioView.tsx"
  ),
  route(
    "/cosmetology/glass_skin",
    "./views/Cosmetology/GlassSkinView/GlassSkinView.tsx"
  ),
  route("/cosmetology/pro_xn", "./views/Cosmetology/ProXnView/ProXnView.tsx"),
] satisfies RouteConfig;
