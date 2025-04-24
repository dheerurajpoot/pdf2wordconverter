// Replace these with your actual IDs
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
const ADSENSE_ID = 'ca-pub-XXXXXXXXXX';
const META_TAG = 'XXXXXXXXXXXXXXXX';

export function Analytics() {
  return (
    <>
      {/* Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />

      {/* Google Search Console Verification */}
      <meta
        name="google-site-verification"
        content={META_TAG}
      />

      {/* Google AdSense */}
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
        crossOrigin="anonymous"
      />
    </>
  );
}
