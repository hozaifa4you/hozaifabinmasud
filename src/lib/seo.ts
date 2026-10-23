import { siteConfig } from '@/config/site.config';
import { stackGroups } from '@/lib/data/stack';
import { getSocialLinks } from '@/lib/links';
import { getCurrentWork } from '@/lib/profile';

export const siteUrl = `https://${siteConfig.website}`;

export const siteDescription = `${siteConfig.name} is a full-stack developer who builds web applications end to end and ships AI features in production. Explore projects, work history and the stack behind them.`;

/** The schema.org graph on the homepage: the site and the person behind it */
export const homeJsonLd = () => {
   const work = getCurrentWork();
   return {
      '@context': 'https://schema.org',
      '@graph': [
         {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: siteConfig.name,
            inLanguage: 'en',
            publisher: { '@id': `${siteUrl}/#person` },
         },
         {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: siteConfig.name,
            alternateName: siteConfig.fullName,
            url: siteUrl,
            jobTitle: siteConfig.designation,
            description: siteDescription,
            ...(work && {
               worksFor: {
                  '@type': 'Organization',
                  name: work.company,
                  url: `https://${work.website}`,
               },
            }),
            address: { '@type': 'PostalAddress', addressCountry: 'BD' },
            sameAs: getSocialLinks().map((social) => social.href),
            knowsAbout: stackGroups.flatMap((group) => group.items),
         },
      ],
   };
};

/** Serialised for a script tag, with `<` escaped so the JSON can't close it */
export const toJsonLd = (data: object) =>
   JSON.stringify(data).replace(/</g, '\\u003c');
