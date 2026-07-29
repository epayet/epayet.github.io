import { QuartzComponent } from '@quartz-community/types';

interface KitNewsletterOptions {
    prefix?: string;
    suffix?: string;
    className?: string;
}
declare const _default: (opts?: KitNewsletterOptions) => QuartzComponent;

export { _default as KitNewsletter, type KitNewsletterOptions };
