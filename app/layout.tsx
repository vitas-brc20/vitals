export const metadata = {
    // header 가이드라인
    title: 'VITALS | brc20, fractal bitcoin, fb, glizzy, $VITAS, $VITALS',
    description: 'Ethereum inside Bitcoin',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
        userScalable: false,
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang='kr'>
        <head>
            <meta name="google-site-verification" content="YYD9LsNfG92THCeBuHtDr3Pozk0Wqt77wIiZQfVNgAU"/>
            <meta name="HandheldFriendly" content="true"/>
            <meta property="og:site_name" content="VITALS" />
            <meta name="keywords" content="brc20, fractal bitcoin, fb, glizzy, $VITAS, $VITALS"/>
        </head>
        <body>{children}</body>
        </html>
    );
}
