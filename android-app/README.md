# MarathiCounter Android App

This directory contains the Android WebView app wrapper for MarathiCounter.

## Prerequisites

- Android Studio (Arctic Fox or newer)
- Android SDK (API 24 or higher)
- Java Development Kit (JDK 11 or higher)

## Setup Instructions

### 1. Create New Android Project in Android Studio

1. Open Android Studio
2. Click "New Project"
3. Select "Empty Activity"
4. Set the following:
   - **Name**: MarathiCounter
   - **Package name**: com.marathicounter.app
   - **Save location**: Choose this `android-app` directory
   - **Language**: Kotlin
   - **Minimum SDK**: API 24 (Android 7.0)
5. Click "Finish"

### 2. Replace MainActivity.kt

Replace the generated `MainActivity.kt` with the file provided in this directory (`MainActivity.kt`).

### 3. Update AndroidManifest.xml

Replace the `AndroidManifest.xml` with the file provided (`AndroidManifest.xml`).

### 4. Update build.gradle

Add the following dependencies to your app-level `build.gradle`:

```gradle
dependencies {
    implementation 'androidx.core:core-ktx:1.12.0'
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'com.google.android.material:material:1.11.0'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.4'
    implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0'
}
```

### 5. Update strings.xml

Replace `res/values/strings.xml` with the provided file.

### 6. Add Network Configuration

Create `res/xml/network_security_config.xml` as provided.

### 7. Configure Your Website URL

In `MainActivity.kt`, update the `WEBSITE_URL` constant to your deployed website URL:

```kotlin
private const val WEBSITE_URL = "https://marathicounter.com"
```

For development/testing, you can use:
- Localhost: `http://10.0.2.2:5173` (Android Emulator)
- Local network: `http://192.168.x.x:5173` (Physical device)

### 8. Build and Run

1. Connect an Android device or start an emulator
2. Click "Run" (green play button) in Android Studio
3. Select your device
4. The app will install and launch

## Features Included

✅ Full WebView integration with JavaScript enabled
✅ Pull-to-refresh functionality
✅ Loading progress bar
✅ Network connectivity check
✅ Back button navigation support
✅ Download support
✅ File upload support
✅ Geolocation support (if needed)
✅ Custom error pages
✅ Hardware acceleration
✅ Cookie support
✅ Local storage support
✅ Safe browsing enabled
✅ Splash screen
✅ Material Design 3

## App Permissions

The app requests the following permissions:
- **INTERNET**: Required for loading the website
- **ACCESS_NETWORK_STATE**: Check network connectivity
- **CAMERA**: For camera features (if needed by web app)
- **READ_EXTERNAL_STORAGE**: For file uploads
- **WRITE_EXTERNAL_STORAGE**: For downloads

## Testing

### Test on Emulator
1. Create an AVD (Android Virtual Device) in Android Studio
2. Select API 24 or higher
3. Run the app

### Test on Physical Device
1. Enable Developer Options on your Android device
2. Enable USB Debugging
3. Connect via USB
4. Run the app from Android Studio

## Deployment

### Generate Signed APK

1. In Android Studio: **Build** → **Generate Signed Bundle / APK**
2. Select **APK**
3. Create or select a keystore
4. Choose **release** build variant
5. Click **Finish**
6. APK will be generated in `app/release/`

### Generate App Bundle (for Google Play)

1. In Android Studio: **Build** → **Generate Signed Bundle / APK**
2. Select **Android App Bundle**
3. Follow the signing steps
4. Upload the `.aab` file to Google Play Console

## App Store Listing

### Required Assets

- **App Icon**: 512x512 PNG (already in `/public/icons/icon-512x512.png`)
- **Feature Graphic**: 1024x500 PNG
- **Screenshots**: At least 2 (phone: 1080x1920)
- **Short Description**: Max 80 characters
- **Full Description**: Max 4000 characters
- **Privacy Policy URL**: Required

### Suggested Description

**Short:**
Professional Marathi dictionary & number converter for legal and government use

**Full:**
MarathiCounter is a comprehensive Marathi language tool designed for the Indian Judiciary, Government offices, and language professionals.

Features:
🔍 Legal Marathi Dictionary - Extensive legal terminology with translations
🔢 Number Converter - Convert numbers to Marathi numerals instantly
📚 Verified Sources - Government and academic verified translations
⚡ Fast & Offline - Works offline once loaded
🎯 User-Friendly - Clean, modern interface

Perfect for:
- Judges and legal professionals
- Government employees
- Students and educators
- Translators and writers
- Anyone learning Marathi

## Troubleshooting

### WebView not loading
- Check internet connection
- Verify WEBSITE_URL is correct
- Check network_security_config.xml for localhost

### App crashes on startup
- Check minimum SDK version (API 24+)
- Verify all permissions in AndroidManifest.xml
- Check logcat for error messages

### Back button not working
- Ensure onBackPressed() is properly implemented in MainActivity.kt

## Support

For issues or questions:
- GitHub Issues: [Your repo URL]
- Email: support@marathicounter.com
