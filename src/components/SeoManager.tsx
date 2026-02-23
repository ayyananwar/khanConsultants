import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type MetaConfig = {
  title: string
  description: string
  type?: 'website' | 'article'
  robots?: 'index, follow' | 'noindex, nofollow'
}

const siteUrl = 'https://khanconsultants.in'
const siteName = 'Khan Consultants'
const defaultImage = `${siteUrl}/hero.png`

const routeMeta: Record<string, MetaConfig> = {
  '/': {
    title: 'Khan Consultants | KMC, Legal, GST & Property Services in Kolkata',
    description:
      'Government-licensed consulting in Kolkata for KMC services, GST, trademark legal support, property matters, licenses, certificates, and business compliance.',
    type: 'website',
  },
  '/about': {
    title: 'About Khan Consultants | Trusted Consulting Legacy in Kolkata',
    description:
      'Learn about Khan Consultants, our consulting legacy, legal-backed approach, and commitment to compliant, transparent service delivery in Kolkata.',
  },
  '/contact': {
    title: 'Contact Khan Consultants | Book Consultation in Kolkata',
    description:
      'Contact Khan Consultants for KMC, GST, trademark, license, and property support. Call, WhatsApp, or submit your query for quick assistance.',
  },
  '/services/kolkata-corporation': {
    title: 'KMC Services in Kolkata | End-to-End Municipal Support',
    description:
      'Expert KMC service support for certificates, trade licenses, property mutation, tenancy and municipal compliance with legal documentation assistance.',
  },
  '/services/certificates': {
    title: 'Birth, Death & Civil Certificates in Kolkata | Khan Consultants',
    description:
      'Professional assistance for birth certificate registration, correction, delayed registration, digitization, and other civil documents through KMC processes.',
  },
  '/services/licenses': {
    title: 'Trade & Commercial Licenses in Kolkata | KMC Compliance Support',
    description:
      'Get support for KMC trade license applications, renewals, compliance checks, and legal documentation for smooth business operations in Kolkata.',
  },
  '/services/property': {
    title: 'Property Mutation, Tax & Tenancy Services in Kolkata',
    description:
      'Resolve Kolkata property matters including mutation, KMC tax hearings, Thika tenancy, and legal document support with experienced consultants.',
  },
  '/services/legal': {
    title: 'Trademark & Legal Services in Kolkata | Brand Protection Experts',
    description:
      'Trademark filing, legal strategy, class selection, objection handling, and business legal support to protect your brand and reduce compliance risk.',
  },
  '/services/gst-accounting': {
    title: 'GST Registration & Accounting Services in Kolkata',
    description:
      'Fast GST registration, compliance setup, filing support, and accounting guidance with complete credential handover and structured advisory.',
  },
  '/services/import-export': {
    title: 'Import Export Services in Kolkata | IEC & Compliance Assistance',
    description:
      'Import-export consulting, documentation guidance, and compliance support for businesses handling cross-border trade from Kolkata.',
  },
  '/services/visas-immigration': {
    title: 'Visa & Immigration Services in Kolkata | End-to-End Guidance',
    description:
      'Consulting support for visa and immigration cases with proper documentation, process guidance, and transparent coordination.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Khan Consultants',
    description: 'Read the Privacy Policy for Khan Consultants and understand how your data is collected, used, and protected.',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Khan Consultants',
    description: 'Review the Terms of Service governing the use of Khan Consultants website and service interactions.',
  },
  '/404': {
    title: 'Page Not Found | Khan Consultants',
    description: 'The requested page could not be found.',
    robots: 'noindex, nofollow',
  },
}

const breadcrumbName: Record<string, string> = {
  services: 'Services',
  'kolkata-corporation': 'Kolkata Corporation',
  certificates: 'Certificates',
  licenses: 'Licenses',
  property: 'Property',
  legal: 'Trade Mark & Legal',
  'gst-accounting': 'GST & Accounting',
  'import-export': 'Import & Export',
  'visas-immigration': 'Visas & Immigration',
  about: 'About',
  contact: 'Contact',
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
}

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function getBreadcrumb(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${siteUrl}/`,
    },
  ] as Array<Record<string, string | number>>

  let currentPath = ''
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: breadcrumbName[segment] ?? segment,
      item: `${siteUrl}${currentPath}`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const isKnownRoute = Boolean(routeMeta[pathname])
    const meta = routeMeta[pathname] ?? routeMeta['/404']
    const canonicalUrl = isKnownRoute ? `${siteUrl}${pathname}` : `${siteUrl}/404`

    document.title = meta.title
    document.documentElement.lang = 'en'

    upsertMeta('meta[name="description"]', 'name', 'description', meta.description)
    upsertMeta('meta[name="robots"]', 'name', 'robots', meta.robots ?? 'index, follow')

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', meta.title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', meta.description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', meta.type ?? 'website')
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', defaultImage)

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description)
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', defaultImage)

    upsertCanonical(canonicalUrl)

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteName,
      url: siteUrl,
      image: defaultImage,
      telephone: '+91-6291-139-691',
      email: 'hello@khanconsultants.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '26/1 Rafi Ahmed Kidwai Road',
        addressLocality: 'Kolkata',
        postalCode: '700016',
        addressCountry: 'IN',
      },
      areaServed: 'Kolkata',
      sameAs: [
        'https://www.facebook.com/KhanConsultants2025',
        'https://www.instagram.com/khanconsultants2025/',
      ],
    }

    const webpageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: meta.title,
      description: meta.description,
      url: canonicalUrl,
      inLanguage: 'en',
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    }

    const schemas: unknown[] = [organizationSchema, webpageSchema]
    if (isKnownRoute && pathname !== '/' && pathname !== '/404') {
      schemas.push(getBreadcrumb(pathname))
    }

    if (isKnownRoute && pathname.startsWith('/services/')) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: breadcrumbName[pathname.split('/')[2] ?? 'services'] ?? 'Consulting Service',
        provider: {
          '@type': 'LocalBusiness',
          name: siteName,
          url: siteUrl,
        },
        areaServed: 'Kolkata',
      })
    }

    let script = document.getElementById('seo-json-ld') as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = 'seo-json-ld'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schemas)
  }, [pathname])

  return null
}
