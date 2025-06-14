# SnapFlow - Photo Sales App

A mobile-friendly photo sales application built with Node.js, Express, Sharp, and Tailwind CSS.

## Features

- **Express Server**: Robust web server with security middleware
- **Photo Processing**: Image optimization using Sharp
- **File Watching**: Automatic detection of new photos with Chokidar
- **Email Notifications**: Integrated with Nodemailer
- **Mobile-First Design**: Responsive UI built with Tailwind CSS
- **Security**: Helmet.js for security headers and rate limiting

## Project Structure

```
snapflow/
├── public/           # Static assets
│   ├── css/         # Compiled CSS
│   ├── js/          # Client-side JavaScript
│   └── uploads/     # Photo uploads directory
├── src/
│   └── styles/      # Tailwind CSS source
├── views/           # EJS templates
├── app.js           # Main Express application
├── package.json     # Dependencies and scripts
├── tailwind.config.js # Tailwind configuration
└── .env             # Environment variables
```

## Quick Start

1. **Install Dependencies**
   ```bash
   cd snapflow
   npm install
   ```

2. **Configure Environment**
   ```bash
   # Copy and edit the .env file
   cp .env.example .env
   # Edit .env with your settings
   ```

3. **Build CSS**
   ```bash
   npm run build-css
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Visit Application**
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run build-css` - Build and watch Tailwind CSS
- `npm test` - Run tests (placeholder)

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./public/uploads

# Email Configuration (Nodemailer)
EMAIL_HOST=your-smtp-host
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-email-password
EMAIL_FROM=noreply@snapflow.com

# Photo Processing Configuration
IMAGE_QUALITY=90
THUMBNAIL_SIZE=300
PREVIEW_SIZE=800
```

## Dependencies

### Production Dependencies
- **express**: Web framework
- **helmet**: Security middleware
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **multer**: File upload handling
- **sharp**: Image processing
- **chokidar**: File system watching
- **nodemailer**: Email functionality

### Development Dependencies
- **nodemon**: Development server with auto-reload
- **tailwindcss**: Utility-first CSS framework
- **@tailwindcss/forms**: Form styling plugin
- **@tailwindcss/typography**: Typography plugin

## API Endpoints

- `GET /` - Homepage
- `GET /health` - Health check endpoint
- `GET /api/*` - API routes (to be implemented)

## Development

### File Structure Guidelines
- Place server-side logic in the root directory
- Client-side assets go in `public/`
- EJS templates go in `views/`
- Tailwind source files go in `src/styles/`

### CSS Development
The project uses Tailwind CSS with a custom configuration. Source files are in `src/styles/input.css` and compiled to `public/css/output.css`.

To watch for changes during development:
```bash
npm run build-css
```

### Adding New Features
1. Create routes in `app.js` or separate route files
2. Add corresponding EJS views in `views/`
3. Add client-side JavaScript to `public/js/`
4. Update Tailwind classes as needed

## Security Features

- **Helmet.js**: Security headers
- **Rate Limiting**: Prevents abuse
- **CORS**: Configurable cross-origin requests
- **Input Validation**: File type and size validation
- **CSP**: Content Security Policy configured

## Mobile Optimization

- Responsive design with Tailwind CSS
- Mobile-first approach
- Optimized images with Sharp
- Touch-friendly interfaces
- Fast loading times

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.


Layman's Desc:
# Event Photo App – Simple Overview

This app is made to help photographers sell photos quickly at events.

There are 3 main people who use it:

---

## 1. The Admin (You or Someone in Charge Before the Event)

* Sets up the event in the app (name, date, location).
* Adds how much prints and digital images will cost.
* Can upload sponsor ads (banners or videos).
* Sponsors can give customers discounts if they look at their ad.
* Once everything is set up, the photographer can start using it at the event.

---

## 2. The Photographer (Using the App at the Event)

* Takes photos at the event.
* The app watches a folder and shows the new photos as they’re added.
* Photographer picks which pictures should be shown to customers.
* Shows customers the gallery on their phone or tablet.
* Customers pick their photos, and the photographer checks them out.
* Photographer presses a “Process” button to deliver the images.
* If prints are ordered, a special QR code is made for printing.

---

## 3. The Customer (At the Event)

### Option 1: Photographer helps them

* Photographer shows them photos on a device.
* They choose what they want and pay in person.
* Photographer processes the order (digital or print).

### Option 2: They scan a QR code on their phone

* They see all the event’s photos.
* They can buy digital images or prints.
* They can also view sponsor ads to earn “points.”

  * Points can be used for discounts or free images.

**After purchase:**

* They get a personal gallery showing only their photos.
* They can download, share to Instagram, or get a QR code to print their order.

---

## Printing System

* After a customer orders prints, they get a **QR code**.
* They go to a print station or kiosk and scan the QR code.
* The machine prints their photos.
* Once printed, the app marks the order as complete.

---

## Key Features

* Easy for customers to buy photos during or after an event.
* Works both in-person (assisted) and on their own (QR).
* Sponsors can advertise, and their ads help lower customer costs.
* Tracks everything for each event: orders, money made, prints sent.

