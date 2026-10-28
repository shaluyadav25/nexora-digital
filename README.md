# Northline Digital Studio

A responsive multi-page website for a product design and software development studio. Built with Vite, React 18, React Router, Tailwind CSS, Framer Motion, React Hook Form, Zod, Embla Carousel, Lucide and React Icons.

## Run locally

Use Node.js 20.19+ or 22.12+ (required by the installed Vite release).

```bash
npm install
npm run dev
```

The development server prints its local URL. Production output is generated in `dist`:

```bash
npm run build
npm run preview
```

Run the source linter with `npm run lint`.

## Pages

- `/` — Home, service preview, process, portfolio, feedback examples and FAQ
- `/about` — Studio story, values, working principles and sample team profiles
- `/services` and `/services/:slug` — Service overview and six service details
- `/portfolio` and `/portfolio/:slug` — Filterable concept work and case-study pages
- `/testimonials` — Illustrative feedback examples
- `/contact` — Validated enquiry form and Lucknow map
- Unknown routes (including `/404`) — Custom not-found page

## Configure before launch

The site deliberately does not invent a real company email address, phone number, WhatsApp number, social profiles, client outcomes, team biographies, or endorsements. Replace the sample studio data and clearly marked concept content in `src/data/` with verified company information before publishing.

In `src/data/siteContent.js`, set:

- `company.name`, `shortName` and `tagline`
- `company.email` and `company.phone`
- `company.whatsappNumber` in international digits-only format (for example `919876543210`, without `+`)
- The five `company.social` profile URLs

Project concepts, profile examples, service content and FAQ entries are kept in the corresponding modules in `src/data/`. Replace the illustrative project and testimonial records with work and quotes you have permission to publish.

### Enquiry delivery

Without a delivery integration, the form validates all input and prepares a copyable enquiry draft. If `company.email` is configured, it offers an email-app draft; the visitor must still press Send in that app.

For server-side delivery, deploy a form endpoint that accepts a JSON `POST` containing the validated form fields, then configure:

```text
VITE_CONTACT_ENDPOINT=https://your-domain.example/api/enquiries
```

Set this variable in your deployment provider and in a local `.env.local` file when needed. The endpoint must validate requests server-side, protect against abuse, and return a successful HTTP status only after accepting the enquiry. Do not put private mail-service credentials in `VITE_` variables.

Newsletter signup is not connected until a receiving address or mailing-list endpoint is configured. The form reports this clearly rather than pretending to subscribe someone.

## Deploy to Vercel

1. Push the project to a Git provider and import the repository in Vercel.
2. Select **Vite** as the framework preset.
3. Use `npm run build` for the build command and `dist` for the output directory.
4. Add `VITE_CONTACT_ENDPOINT` in Vercel project settings if a server-side form endpoint is available.
5. Deploy. `vercel.json` sends direct page requests to the SPA entry point; verify direct visits to `/services/web-development` and `/portfolio/fieldnote-operations` after deployment.
6. Replace sample business, team, project, contact and social data before sharing the site with clients.

## Design and accessibility

The visual system uses a light cream, navy, royal blue, terracotta, sage and sand palette. Navigation, links and controls are keyboard accessible; the enquiry form has inline validation; route changes scroll to the top; and reduced-motion preferences disable looping decoration.
"# nexora-digital" 
