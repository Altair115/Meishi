export function useHeroBannerClip(widths: string[]) {
    const slope = 5; // in percentage of height – tweak for more/less lean

    function getLayerStyle(index: number) {
        const left = widths.slice(0, index).reduce((acc, val) => acc + parseFloat(val), 0);
        const width = parseFloat(widths[index]);

        // Common top lean down-right shape
        const clipPath = `polygon(
      0% 0%,               /* top-left */
      100% ${slope}%,      /* top-right lower */
      100% 100%,           /* bottom-right */
      0% calc(100% - ${slope}%) /* bottom-left higher */
    )`;

        return {
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: `${left}%`,
            width: `${width}%`,
            clipPath,
        };
    }

    return { getLayerStyle };
}