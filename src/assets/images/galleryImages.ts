// Gallery Images - Easy to update
// Place your gallery images in: src/assets/images/gallery/

export interface GalleryImage {
  id: number;
  imageUrl: string;
  title: string;
  height: string;
  category: string;
}

// Import gallery images
import image00021 from './gallery/image00021.jpeg';
import image00036 from './gallery/image00036.jpeg';
import img20230818 from './gallery/IMG-20230818-WA0021.jpg';
import img20230822 from './gallery/IMG-20230822-WA0001.jpg';
import img20221201 from './gallery/20221201_153223.jpg';
import img20220913 from './gallery/20220913_132115.jpg';
import img20220624 from './gallery/20220624_144411.jpg';
import img20230817 from './gallery/IMG-20230817-WA0010.jpeg';
import img20240904_1 from './gallery/20240904_160446.jpg';
import img20240904_2 from './gallery/20240904_160233.jpg';
import img20231120 from './gallery/20231120_155102.jpg';

export const galleryImages: GalleryImage[] = [
  { 
    id: 1, 
    imageUrl: image00021, 
    title: "Construction Project", 
    height: "h-[500px]",
    category: "Construction"
  },
  { 
    id: 2, 
    imageUrl: image00036, 
    title: "Renovation Work", 
    height: "h-[300px]",
    category: "Renovation"
  },
  { 
    id: 3, 
    imageUrl: img20230818, 
    title: "Building Project", 
    height: "h-[400px]",
    category: "Construction"
  },
  { 
    id: 4, 
    imageUrl: img20230822, 
    title: "Interior Work", 
    height: "h-[250px]",
    category: "Interior"
  },
  { 
    id: 5, 
    imageUrl: img20221201, 
    title: "Construction Site", 
    height: "h-[600px]",
    category: "Construction"
  },
  { 
    id: 6, 
    imageUrl: img20220913, 
    title: "Renovation Project", 
    height: "h-[350px]",
    category: "Renovation"
  },
  { 
    id: 7, 
    imageUrl: img20220624, 
    title: "Building Work", 
    height: "h-[280px]",
    category: "Construction"
  },
  { 
    id: 8, 
    imageUrl: img20230817, 
    title: "Interior Renovation", 
    height: "h-[450px]",
    category: "Interior"
  },
  { 
    id: 9, 
    imageUrl: img20240904_1, 
    title: "Construction Project", 
    height: "h-[320px]",
    category: "Construction"
  },
  { 
    id: 10, 
    imageUrl: img20240904_2, 
    title: "Renovation Work", 
    height: "h-[380px]",
    category: "Renovation"
  },
  { 
    id: 11, 
    imageUrl: img20231120, 
    title: "Building Project", 
    height: "h-[420px]",
    category: "Construction"
  }
];

// To update gallery images:
// 1. Add your images to: src/assets/images/gallery/
// 2. Import them at the top of this file like:
//    import gallery1 from './gallery/gallery1.jpg';
// 3. Replace the imageUrl in the array above with your imports
// 4. Update titles, heights, and categories as needed
// 5. Recommended image format: JPG or PNG
// 6. Recommended size: Various heights (250px to 600px) for masonry layout
// 7. Make sure images are high quality and represent your work well
