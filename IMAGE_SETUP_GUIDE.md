# Adding Images to Craft Styles

This guide explains how to add images from your Google Drive to the Craft Styles section.

## Option 1: Using Direct Google Drive URLs (Recommended)

For each image in your Drive folder, get its direct link:

1. **Right-click** the image in Google Drive
2. Select **"Get link"**
3. Make sure the link is set to **"Anyone with the link can view"**
4. Copy the share link (should look like: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`)
5. Convert it to a direct URL format by replacing the file ID in this template:
   ```
   https://drive.google.com/uc?id=FILE_ID&export=view
   ```
   
   Where FILE_ID is the string between `/d/` and `/view` in the share link.

## Option 2: Using Local Images

1. **Download images** from Google Drive to your computer
2. **Create** a `public/images/` folder in your project root
3. **Place images** in this folder (e.g., `public/images/knoting-1.jpg`)
4. **Update** `src/app/imageConfig.ts` to use relative paths:
   ```typescript
   images: [
     '/images/knoting-1.jpg',
     '/images/knoting-2.jpg',
   ]
   ```

## Folder Structure from Your Drive

Based on your Drive setup, you have:

- **Knoting Style**: 5 images (1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpeg)
- **Dipping Style**: 5 images
- **Cloud Style**: 5 images

## How to Update imageConfig.ts

Edit `src/app/imageConfig.ts` and add your URLs:

```typescript
export const imageConfig = {
  knotingStyle: {
    images: [
      'https://drive.google.com/uc?id=KNOTING_FILE_ID_1&export=view',
      'https://drive.google.com/uc?id=KNOTING_FILE_ID_2&export=view',
      // ... add all 5 images
    ],
    primaryImage: 'https://drive.google.com/uc?id=KNOTING_FILE_ID_1&export=view', // First image shown in card
  },
  dippingStyle: {
    images: [
      'https://drive.google.com/uc?id=DIPPING_FILE_ID_1&export=view',
      // ... add all 5 images
    ],
    primaryImage: 'https://drive.google.com/uc?id=DIPPING_FILE_ID_1&export=view',
  },
  cloudStyle: {
    images: [
      'https://drive.google.com/uc?id=CLOUD_FILE_ID_1&export=view',
      // ... add all 5 images
    ],
    primaryImage: 'https://drive.google.com/uc?id=CLOUD_FILE_ID_1&export=view',
  },
};
```

## Getting File IDs from Drive

If you have trouble finding file IDs:
1. Open the image in Google Drive preview
2. Look at the URL: `https://drive.google.com/file/d/{FILE_ID}/view`
3. Copy the FILE_ID

## Testing

After updating `imageConfig.ts`, the website will automatically display the images in the Craft Styles cards. No need to rebuild – just refresh your browser!
