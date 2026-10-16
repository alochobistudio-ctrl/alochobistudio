export interface ServiceItem {
  id: string;
  nameBn: string;
  nameEn: string;
  category: 'wedding' | 'event' | 'personal' | 'production';
  descriptionBn: string;
  fullDetailsBn: string;
  deliverablesBn: string[];
  equipmentBn: string;
  iconName: string;
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  titleBn: string;
  titleEn: string;
  category: 'wedding' | 'prewedding' | 'event' | 'portrait' | 'baby' | 'other';
  categoryLabelBn: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  cameraInfo: string;
  lensInfo: string;
  locationBn: string;
  storyBn: string;
}

export interface PackageItem {
  id: string;
  nameBn: string;
  nameEn: string;
  taglineBn: string;
  badgeBn?: string;
  featuresBn: string[];
  suitableForBn: string;
  deliverablesBn: string[];
  popular?: boolean;
}

export interface VideoItem {
  id: string;
  titleBn: string;
  titleEn: string;
  duration: string;
  thumbnailUrl: string;
  categoryBn: string;
  viewsBn: string;
  embedId: string;
}

export interface TestimonialItem {
  id: string;
  clientNameBn: string;
  eventBn: string;
  dateBn: string;
  rating: number;
  reviewBn: string;
  locationBn: string;
  avatarUrl: string;
}
