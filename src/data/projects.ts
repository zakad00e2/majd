import { Project } from "@/types";

// TODO: Replace demo Unsplash images with real project photos

// ─── Architectural demo images from Unsplash ───
const img = {
  // Residential / Villas
  villa1: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  villa2: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  villa3: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  villa4: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  villa5: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",

  // Commercial / Towers
  tower1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  tower2: "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
  tower3: "https://images.unsplash.com/photo-1577985043696-8bd54d9c4f89?w=800&q=80",

  // Interior
  interior1: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  interior2: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  interior3: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  interior4: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",

  // Office / Coworking
  office1: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  office2: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
  office3: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80",

  // Hospitality / Restaurant
  restaurant1: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  restaurant2: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
  restaurant3: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",

  // Hotel
  hotel1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
  hotel2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  hotel3: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",

  // Residential complex
  complex1: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  complex2: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=80",
  complex3: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",

  // Mall / Commercial center
  mall1: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
  mall2: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80",

  // Penthouse
  penthouse1: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
  penthouse2: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  penthouse3: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",

  // Mosque
  mosque1: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
  mosque2: "https://images.unsplash.com/photo-1545167496-28be8f7d6054?w=800&q=80",
  mosque3: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80",

  // Coastal villa
  coastal1: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
  coastal2: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
  coastal3: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "villa-riyadh",
    title: "فيلا الرياض الحديثة",
    category: "سكني",
    description:
      "تصميم فيلا سكنية فاخرة تجمع بين الخطوط المعمارية الحديثة والطابع المحلي. تم التركيز على الإضاءة الطبيعية والمساحات المفتوحة مع الحفاظ على الخصوصية.",
    area: "٨٥٠ م²",
    style: "حديث",
    concept: "الانفتاح على الطبيعة مع الحفاظ على الخصوصية",
    materials: "حجر طبيعي، زجاج، خشب بلوط",
    features: "مسبح داخلي، حديقة مركزية، إضاءة طبيعية متقدمة",
    location: "الرياض، المملكة العربية السعودية",
    images: [img.villa1, img.villa2, img.villa3],
    thumbnail: img.villa1,
    featured: true,
  },
  {
    id: 2,
    slug: "office-tower-jeddah",
    title: "برج المكاتب – جدة",
    category: "تجاري",
    description:
      "برج مكاتب تجاري بتصميم مستدام يوفر بيئة عمل ملهمة. الواجهات الزجاجية المزدوجة تقلل استهلاك الطاقة وتوفر إطلالات بانورامية.",
    area: "١٢,٠٠٠ م²",
    style: "معاصر مستدام",
    concept: "بيئة عمل ملهمة ومستدامة",
    materials: "فولاذ، زجاج مزدوج، ألمنيوم",
    features: "واجهات ذكية، حدائق معلقة، نظام طاقة متجددة",
    location: "جدة، المملكة العربية السعودية",
    images: [img.tower1, img.tower2, img.tower3],
    thumbnail: img.tower1,
    featured: true,
  },
  {
    id: 3,
    slug: "interior-apartment",
    title: "شقة فندقية – التصميم الداخلي",
    category: "داخلي",
    description:
      "تصميم داخلي لشقة فندقية فاخرة بأسلوب عصري أنيق. تم استخدام مواد طبيعية فاخرة وألوان هادئة لخلق أجواء من الراحة والفخامة.",
    area: "٢٥٠ م²",
    style: "فاخر عصري",
    concept: "الفخامة الهادئة",
    materials: "رخام إيطالي، خشب جوز، نحاس",
    features: "إضاءة مخفية، أثاث مخصص، نظام صوتي مدمج",
    images: [img.interior1, img.interior2, img.interior3],
    thumbnail: img.interior1,
    featured: true,
  },
  {
    id: 4,
    slug: "residential-complex",
    title: "مجمع سكني المدينة",
    category: "سكني",
    description:
      "مجمع سكني يضم ٤٠ وحدة سكنية بتصميم يراعي المناخ المحلي والاحتياجات الاجتماعية لسكان المنطقة.",
    area: "٥,٠٠٠ م²",
    style: "معاصر محلي",
    concept: "مجتمع متكامل ومستدام",
    materials: "طوب محلي، خرسانة مكشوفة، خشب",
    features: "ساحات مشتركة، مسارات مشاة، مساحات خضراء",
    location: "المدينة المنورة",
    images: [img.complex1, img.complex2, img.complex3],
    thumbnail: img.complex1,
    featured: true,
  },
  {
    id: 5,
    slug: "restaurant-design",
    title: "مطعم الواحة",
    category: "ضيافة",
    description:
      "تصميم مطعم فاخر مستوحى من الواحات العربية. الأجواء الداخلية تنقل الزائر إلى عالم من الأصالة والحداثة.",
    area: "٤٥٠ م²",
    style: "عربي معاصر",
    concept: "رحلة حسية عبر التراث",
    materials: "حجر رملي، نخيل، نحاس مؤكسد",
    features: "إضاءة مسرحية، مطبخ مفتوح، جلسات خارجية",
    images: [img.restaurant1, img.restaurant2, img.restaurant3],
    thumbnail: img.restaurant1,
    featured: true,
  },
  {
    id: 6,
    slug: "corporate-interior",
    title: "مقر شركة تقنية",
    category: "مكتبي",
    description:
      "تصميم داخلي لمقر شركة تقنية ناشئة، بيئة عمل تشجع الإبداع والتعاون مع مراعاة الخصوصية.",
    area: "١,٢٠٠ م²",
    style: "صناعي حديث",
    concept: "إبداع بلا حدود",
    materials: "خرسانة مكشوفة، فولاذ، زجاج",
    features: "مساحات مرنة، غرف اجتماعات ذكية، مقهى داخلي",
    images: [img.office1, img.office2, img.office3],
    thumbnail: img.office1,
    featured: true,
  },
  {
    id: 7,
    slug: "luxury-villa-dammam",
    title: "فيلا الدمام الساحلية",
    category: "سكني",
    description:
      "فيلا ساحلية تستفيد من الإطلالة البحرية في كل زاوية. تصميم يدمج بين الرفاهية والاستدامة.",
    area: "١,١٠٠ م²",
    style: "ساحلي فاخر",
    concept: "العيش مع البحر",
    materials: "حجر بحري، خشب تيك، زجاج عاكس",
    features: "مسبح لا نهائي، تراسات متعددة، حديقة استوائية",
    location: "الدمام",
    images: [img.coastal1, img.coastal2, img.coastal3],
    thumbnail: img.coastal1,
    featured: false,
  },
  {
    id: 8,
    slug: "boutique-hotel",
    title: "فندق بوتيكي – العلا",
    category: "ضيافة",
    description:
      "فندق بوتيكي صغير يندمج مع المشهد الصخري الطبيعي في العلا. تجربة إقامة فريدة في قلب التاريخ.",
    area: "٣,٠٠٠ م²",
    style: "عضوي طبيعي",
    concept: "الاندماج مع الطبيعة",
    materials: "حجر محلي، طين، خشب محلي",
    features: "أجنحة صخرية، مطعم تحت النجوم، سبا طبيعي",
    location: "العلا",
    images: [img.hotel1, img.hotel2, img.hotel3],
    thumbnail: img.hotel1,
    featured: false,
  },
  {
    id: 9,
    slug: "commercial-center",
    title: "مركز تجاري حديث",
    category: "تجاري",
    description:
      "مركز تجاري بتصميم عصري يجمع بين التسوق والترفيه والثقافة في مكان واحد.",
    area: "٢٥,٠٠٠ م²",
    style: "حديث ديناميكي",
    concept: "وجهة متعددة الاستخدامات",
    materials: "فولاذ، زجاج، خرسانة ملونة",
    features: "سينما، حدائق داخلية، ساحة فعاليات",
    images: [img.mall1, img.mall2, img.tower3],
    thumbnail: img.mall1,
    featured: false,
  },
  {
    id: 10,
    slug: "penthouse-interior",
    title: "بنتهاوس – التصميم الداخلي",
    category: "داخلي",
    description:
      "تصميم داخلي لبنتهاوس فاخر بأسلوب مينيمالي دافئ. كل قطعة أثاث مختارة بعناية لتحقيق التوازن بين الجمال والراحة.",
    area: "٣٨٠ م²",
    style: "مينيمالي دافئ",
    concept: "الأقل هو الأكثر",
    materials: "رخام، خشب بلوط فاتح، جلد طبيعي",
    features: "تراس بانورامي، مكتبة مدمجة، إضاءة ذكية",
    images: [img.penthouse1, img.penthouse2, img.penthouse3],
    thumbnail: img.penthouse1,
    featured: false,
  },
  {
    id: 11,
    slug: "mosque-design",
    title: "جامع النور",
    category: "تجاري",
    description:
      "تصميم مسجد معاصر يحترم التراث الإسلامي ويضيف لمسة عصرية. الإضاءة الطبيعية تلعب دوراً محورياً في التصميم.",
    area: "٢,٥٠٠ م²",
    style: "إسلامي معاصر",
    concept: "النور والسكينة",
    materials: "حجر أبيض، زجاج ملون، خط عربي",
    features: "قبة زجاجية، محراب مضيء، ساحة صلاة خارجية",
    images: [img.mosque1, img.mosque2, img.mosque3],
    thumbnail: img.mosque1,
    featured: false,
  },
  {
    id: 12,
    slug: "coworking-space",
    title: "مساحة عمل مشتركة",
    category: "مكتبي",
    description:
      "مساحة عمل مشتركة مصممة لتحفيز الإنتاجية والتعاون. تصميم مرن يتكيف مع احتياجات المستخدمين المختلفة.",
    area: "٨٠٠ م²",
    style: "صناعي مريح",
    concept: "العمل كتجربة",
    materials: "خشب معاد تدويره، حديد، نباتات حية",
    features: "بودات خاصة، مقهى، غرف مكالمات صوتية",
    images: [img.office2, img.office3, img.office1],
    thumbnail: img.office2,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getSimilarProjects(project: Project, count = 3): Project[] {
  return projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, count);
}
