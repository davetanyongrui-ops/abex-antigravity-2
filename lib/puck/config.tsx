import { Config } from "@measured/puck";
import { Droplet, Zap, Factory, Settings, ChevronRight } from "lucide-react";
import { CompanyCertifications } from "@/components/site/CompanyCertifications";
import { motion } from "framer-motion";

type Props = {
    Hero: {
        title: string;
        subtitle: string;
        bgImage?: string;
        ctaText?: string;
        ctaHref?: string;
        variant?: "home" | "inner";
        className?: string;
        titleColor?: string;
        subtitleColor?: string;
        textSize?: "small" | "medium" | "large";
        fontFamily?: "sans" | "serif" | "mono";
    };
    FeatureGrid: {
        label?: string;
        heading: string;
        description?: string;
        features: { title: string; description: string; icon?: "Droplet" | "Zap" | "Factory" | "Settings" }[];
    };
    TextBlock: {
        heading: string;
        content: string;
        textColor?: string;
        backgroundColor?: string;
        textSize?: "small" | "medium" | "large";
        fontFamily?: "sans" | "serif" | "mono";
        ctaText?: string;
        ctaHref?: string;
    };
    ContactForm: {
        title: string;
        description: string;
        renderForm?: () => React.ReactNode;
    };
    ProductCatalog: {
        title: string;
        renderCatalog?: () => React.ReactNode;
    };
    ProjectTimeline: {
        title: string;
        renderTimeline?: () => React.ReactNode;
    };
    ImageSplit: {
        label?: string;
        title: string;
        description: string;
        image: string;
        reverse: boolean;
        theme: "light" | "dark";
        ctaText?: string;
        ctaHref?: string;
        textColor?: string;
        backgroundColor?: string;
        textSize?: "small" | "medium" | "large";
        fontFamily?: "sans" | "serif" | "mono";
        imageFit?: "cover" | "contain";
        imageScale?: number;
    };
    StatsGrid: {
        stats: { label: string; value: string }[];
    };
    BrandsGrid: {
        title: string;
        description: string;
        brands: { name: string; logo: string; scale?: number; description: string }[];
    };
    ShortCTA: {
        title: string;
        subtitle: string;
        ctaText: string;
        ctaHref: string;
        bgImage: string;
        bgSize?: "cover" | "contain";
    };
    CompanyCertifications: {};
};

const IconMap = {
    Droplet: Droplet,
    Zap: Zap,
    Factory: Factory,
    Settings: Settings,
};

import { useTranslations } from "next-intl";

export const config: Config<Props> = {
    components: {
        Hero: {
            fields: {
                title: { type: "text", contentEditable: true },
                subtitle: { type: "textarea", contentEditable: true },
                bgImage: { type: "text" },
                ctaText: { type: "text", contentEditable: true },
                ctaHref: { type: "text" },
                variant: {
                    type: "radio",
                    options: [
                        { label: "Home", value: "home" },
                        { label: "Inner", value: "inner" },
                    ],
                },
                titleColor: { type: "text" },
                subtitleColor: { type: "text" },
                textSize: {
                    type: "select",
                    options: [
                        { label: "Small", value: "small" },
                        { label: "Medium", value: "medium" },
                        { label: "Large", value: "large" },
                    ],
                },
                fontFamily: {
                    type: "select",
                    options: [
                        { label: "Sans", value: "sans" },
                        { label: "Serif", value: "serif" },
                        { label: "Mono", value: "mono" },
                    ],
                },
            },
            defaultProps: {
                title: "Reliable Water Pump Solutions for Every Industry",
                subtitle: "Power. Precision. Performance. ABEX delivers trusted water pump systems built to move the world's most essential resource — water.",
                bgImage: "https://images.unsplash.com/photo-1558444479-c84825d2ea9d?q=80&w=2000",
                ctaText: "Learn More",
                ctaHref: "/about",
                variant: "home",
            },
            render: ({ title, subtitle, bgImage, ctaText, ctaHref, variant, className, titleColor, subtitleColor, textSize, fontFamily, puck }) => {
                return (
                    <section className={className || `relative flex items-center overflow-hidden ${variant === 'inner'
                        ? 'min-h-[500px] md:min-h-[750px] py-32'
                        : 'min-h-screen min-h-[1000px] py-56'
                        }`}>
                        {/* Background Image Fix: Using standard img for external URLs with typing fallback */}
                        <div className="absolute inset-0 z-0 bg-slate-900">
                            {bgImage && (bgImage.startsWith('http') || bgImage.startsWith('/')) ? (
                                <img
                                    src={bgImage}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white/10 text-xs">
                                    {bgImage ? "Entering URL..." : "No Image"}
                                </div>
                            )}
                        </div>
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60 z-10" />

                        <motion.div
                            className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full flex flex-col h-full"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className={`max-w-3xl ${className?.includes('text-center') ? 'mx-auto text-center' : 'text-left'}`}>
                                <h1
                                    className={`${variant === 'inner' ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'} font-bold text-white mb-6 leading-tight ${fontFamily === 'serif' ? 'font-serif' : fontFamily === 'mono' ? 'font-mono' : 'font-sans'}`}
                                    style={{ color: titleColor }}
                                >
                                    {title}
                                </h1>
                                <p
                                    className={`${textSize === 'small' ? 'text-sm' : textSize === 'large' ? 'text-xl md:text-2xl' : variant === 'inner' ? 'text-base md:text-lg' : 'text-lg md:text-xl'} text-white/90 mb-10 leading-relaxed ${fontFamily === 'serif' ? 'font-serif' : fontFamily === 'mono' ? 'font-mono' : 'font-sans'} ${className?.includes('text-center') ? 'mx-auto' : ''} max-w-2xl`}
                                    style={{ color: subtitleColor }}
                                >
                                    {subtitle}
                                </p>
                                {ctaText && (
                                    <div className={`flex ${className?.includes('text-center') ? 'justify-center' : 'justify-start'}`}>
                                        <a
                                            href={ctaHref || "/about"}
                                            className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold text-base rounded-md hover:bg-primary-dark transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                                            onClick={(e) => { if (puck.isEditing) e.preventDefault(); }}
                                        >
                                            {ctaText}
                                            <ChevronRight className="ml-2 w-5 h-5" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </section>
                );
            },
        },
        TextBlock: {
            fields: {
                heading: { type: "text", contentEditable: true },
                content: { type: "textarea", contentEditable: true },
                textColor: { type: "text" },
                backgroundColor: { type: "text" },
                textSize: {
                    type: "select",
                    options: [
                        { label: "Small", value: "small" },
                        { label: "Medium", value: "medium" },
                        { label: "Large", value: "large" },
                    ],
                },
                fontFamily: {
                    type: "select",
                    options: [
                        { label: "Sans", value: "sans" },
                        { label: "Serif", value: "serif" },
                        { label: "Mono", value: "mono" },
                    ],
                },
                ctaText: { type: "text", contentEditable: true },
                ctaHref: { type: "text" },
            },
            render: ({ heading, content, textColor, backgroundColor, textSize, fontFamily, ctaText, ctaHref, puck }) => (
                <section
                    className={`py-20 ${fontFamily === 'serif' ? 'font-serif' : fontFamily === 'mono' ? 'font-mono' : 'font-sans'}`}
                    style={{ backgroundColor: backgroundColor || 'white' }}
                >
                    <motion.div
                        className="max-w-4xl mx-auto px-6 lg:px-8"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {heading && (
                            <div className="mb-10">
                                <h2
                                    className="text-3xl md:text-4xl font-bold section-heading mb-6"
                                    style={{ color: textColor }}
                                >
                                    {heading}
                                </h2>
                            </div>
                        )}
                        <div
                            className={`${textSize === 'small' ? 'text-base' : textSize === 'large' ? 'text-xl' : 'text-lg'} leading-relaxed whitespace-pre-wrap opacity-90`}
                            style={{ color: textColor || '#334155' }}
                        >
                            {content}
                        </div>
                        {ctaText && (
                            <div className="mt-12">
                                <a
                                    href={ctaHref || "#"}
                                    className="h-14 inline-flex items-center px-10 bg-primary text-white font-bold text-base rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg group"
                                    onClick={(e) => { if (puck && puck.isEditing) e.preventDefault(); }}
                                >
                                    {ctaText}
                                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        )}
                    </motion.div>
                </section>
            ),
        },
        FeatureGrid: {
            fields: {
                label: { type: "text", contentEditable: true },
                heading: { type: "text", contentEditable: true },
                description: { type: "textarea", contentEditable: true },
                features: {
                    type: "array",
                    arrayFields: {
                        title: { type: "text", contentEditable: true },
                        description: { type: "textarea", contentEditable: true },
                        icon: {
                            type: "radio", options: [
                                { label: "Water", value: "Droplet" },
                                { label: "Power", value: "Zap" },
                                { label: "Industry", value: "Factory" },
                                { label: "Maintenance", value: "Settings" }
                            ]
                        }
                    },
                    getItemSummary: (item) => item.title || "Feature",
                },
            },
            render: ({ label, heading, description, features }) => (
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            {label && (
                                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
                                    {label}
                                </span>
                            )}
                            <h2 className="text-3xl md:text-5xl font-extrabold section-heading-center leading-tight">
                                {heading}
                            </h2>
                            {description && (
                                <p className="mt-6 text-lg md:text-xl text-slate-600 font-sans leading-relaxed opacity-95">
                                    {description}
                                </p>
                            )}
                        </div>
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {(features || []).map((feat: any, i: number) => {
                                return (
                                    <motion.div
                                        key={`${feat.title}-${i}`}
                                        className="bg-white p-10 rounded-2xl shadow-md card-hover border border-slate-100 flex flex-col items-center text-center"
                                        variants={{
                                            hidden: { opacity: 0, y: 40 },
                                            show: { opacity: 1, y: 0 }
                                        }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                    >
                                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 shadow-sm">
                                            {(() => {
                                                const Icon = feat.icon ? (IconMap as any)[feat.icon] : Settings;
                                                return <Icon className="w-8 h-8" />;
                                            })()}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-5 font-heading w-full">
                                            {feat.title}
                                        </h3>
                                        <p className="text-slate-600 text-base leading-relaxed font-sans opacity-95 w-full">
                                            {feat.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>
            ),
        },
        ContactForm: {
            fields: {
                title: { type: "text", contentEditable: true },
                description: { type: "textarea", contentEditable: true },
            },
            render: ({ title, description, renderForm }) => {
                const tCommon = useTranslations('Common');
                if (renderForm) return <div key="form-container">{renderForm()}</div>;
                return (
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold section-heading mb-6">
                                        {title || tCommon('ConsultExpert')}
                                    </h2>
                                    <p className="text-lg text-slate-700 mb-10 leading-relaxed font-sans">
                                        {description}
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                                                <Settings className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 mb-1">{tCommon('TailoredEngineering')}</h4>
                                                <p className="text-slate-600 text-sm">{tCommon('CustomizedSolutions')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="h-14 bg-slate-50 border border-slate-200 rounded-md" />
                                            <div className="h-14 bg-slate-50 border border-slate-200 rounded-md" />
                                        </div>
                                        <div className="h-14 bg-slate-50 border border-slate-200 rounded-md" />
                                        <div className="h-32 bg-slate-50 border border-slate-200 rounded-md" />
                                        <div className="h-14 bg-primary rounded-md flex items-center justify-center text-white font-bold text-base shadow-md hover:bg-primary-dark transition-all">
                                            {tCommon('SendMessage')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            }
        },
        ProductCatalog: {
            fields: {
                title: { type: "text", contentEditable: true },
            },
            render: ({ title, renderCatalog }) => {
                const t = useTranslations('ProductCatalog');
                if (renderCatalog) return <div key="catalog-container">{renderCatalog()}</div>;
                return (
                    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
                        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                            <div className="mb-12 border-b border-white/10 pb-8 flex justify-between items-end">
                                <div>
                                    <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-3 block">{t('PremiumInventory')}</span>
                                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading">
                                        {title || t('DefaultTitle')}
                                    </h2>
                                </div>
                                <div className="hidden md:block">
                                    <button className="h-12 px-6 bg-white/10 hover:bg-white/20 transition-colors rounded-md text-sm font-bold border border-white/10">
                                        {t('ViewFullCatalog')}
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-40">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={`pc-placeholder-${i}`} className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col items-center">
                                        <div className="w-full aspect-square bg-white/10 rounded mb-6" />
                                        <div className="h-4 bg-white/10 w-full mb-4" />
                                        <div className="h-3 bg-white/10 w-2/3" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            }
        },
        ProjectTimeline: {
            fields: {
                title: { type: "text", contentEditable: true },
            },
            render: ({ title, renderTimeline }) => {
                const tCommon = useTranslations('Common');
                if (renderTimeline) return <div key="timeline-container">{renderTimeline()}</div>;
                return (
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold section-heading-center">
                                    {title || tCommon('ProjectExcellence')}
                                </h2>
                            </div>
                            <div className="space-y-12 opacity-30">
                                {[1, 2, 3].map(i => (
                                    <div key={`pt-placeholder-${i}`} className="flex gap-12 items-center">
                                        <div className="w-20 h-20 bg-slate-100 rounded-full flex-shrink-0" />
                                        <div className="flex-1 space-y-4">
                                            <div className="h-6 bg-slate-100 w-1/4" />
                                            <div className="h-4 bg-slate-100 w-3/4" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            }
        },
        ImageSplit: {
            fields: {
                label: { type: "text", contentEditable: true },
                title: { type: "text", contentEditable: true },
                description: { type: "textarea", contentEditable: true },
                image: { type: "text" },
                reverse: { type: "radio", options: [{ label: "Image Right", value: false }, { label: "Image Left", value: true }] },
                theme: { type: "radio", options: [{ label: "Light", value: "light" }, { label: "Dark", value: "dark" }] },
                ctaText: { type: "text", contentEditable: true },
                ctaHref: { type: "text" },
                textColor: { type: "text" },
                backgroundColor: { type: "text" },
                textSize: {
                    type: "select",
                    options: [
                        { label: "Small", value: "small" },
                        { label: "Medium", value: "medium" },
                        { label: "Large", value: "large" },
                    ],
                },
                fontFamily: {
                    type: "select",
                    options: [
                        { label: "Sans", value: "sans" },
                        { label: "Serif", value: "serif" },
                        { label: "Mono", value: "mono" },
                    ],
                },
                imageFit: {
                    type: "radio",
                    options: [
                        { label: "Cover", value: "cover" },
                        { label: "Contain", value: "contain" },
                    ],
                },
                imageScale: {
                    type: "number",
                },
            },
            defaultProps: {
                title: "Section Title",
                description: "Section description goes here.",
                image: "https://images.unsplash.com/photo-1558444479-c84825d2ea9d?q=80&w=2000",
                reverse: false,
                theme: "light",
                imageFit: "cover",
                imageScale: 1,
            },
            render: ({ label, title, description, image, reverse, theme, ctaText, ctaHref, textColor, backgroundColor, textSize, fontFamily, imageFit, imageScale, puck }) => (
                <section
                    className={`py-24 ${fontFamily === 'serif' ? 'font-serif' : fontFamily === 'mono' ? 'font-mono' : 'font-sans'}`}
                    style={{
                        backgroundColor: backgroundColor || (theme === 'dark' ? '#0f172a' : 'white'),
                        color: textColor || (theme === 'dark' ? 'white' : '#0f172a')
                    }}
                >
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={reverse ? 'lg:order-2' : ''}>
                                {label && (
                                    <span className="text-primary font-bold text-xs uppercase tracking-widest mb-6 block">
                                        {label}
                                    </span>
                                )}
                                <h2
                                    className="text-3xl md:text-4xl font-bold section-heading mb-8"
                                    style={{ color: textColor }}
                                >
                                    {title}
                                </h2>
                                <p
                                    className={`${textSize === 'small' ? 'text-base' : textSize === 'large' ? 'text-xl' : 'text-lg'} leading-relaxed mb-6 opacity-95`}
                                    style={{ color: textColor || (theme === 'dark' ? '#cbd5e1' : '#334155') }}
                                >
                                    {description}
                                </p>
                                {ctaText && (
                                    <a
                                        href={ctaHref || "#"}
                                        className="h-12 inline-flex items-center px-8 bg-primary text-white font-bold text-sm rounded-md hover:bg-primary-dark transition-all duration-300 shadow-md"
                                        onClick={(e) => { if (puck.isEditing) e.preventDefault(); }}
                                    >
                                        {ctaText}
                                        <ChevronRight className="ml-2 w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            <div className={`relative ${reverse ? 'lg:order-1' : ''} group px-4 w-full max-w-2xl mx-auto`}>
                                <div className="absolute inset-0 bg-blue-600/5 -rotate-3 scale-105 rounded-2xl -z-10 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="aspect-square lg:aspect-[3/4] overflow-hidden rounded-2xl shadow-xl border border-slate-100 bg-slate-200">
                                    {image && (image.startsWith('http') || image.startsWith('/')) ? (
                                        <img
                                            src={image}
                                            alt={typeof title === 'string' ? title : "Image"}
                                            className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'} transform transition-transform duration-[1500ms] group-hover:scale-105`}
                                            style={{ transform: `scale(${imageScale || 1})` }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs font-sans">
                                            {image ? "Entering URL..." : "No Image"}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        },
        StatsGrid: {
            fields: {
                stats: {
                    type: "array",
                    arrayFields: {
                        label: { type: "text", contentEditable: true },
                        value: { type: "text", contentEditable: true },
                    },
                }
            },
            render: ({ stats }) => (
                <section className="bg-primary py-20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {(stats || []).map((stat: any, idx: number) => {
                                return (
                                    <div key={`${stat.label}-${idx}`} className="text-center text-white">
                                        <div className="text-4xl md:text-5xl font-extrabold mb-3 font-heading">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-bold text-white/80 uppercase tracking-widest font-sans">
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )
        },
        BrandsGrid: {
            fields: {
                title: { type: "text", contentEditable: true },
                description: { type: "textarea", contentEditable: true },
                brands: {
                    type: "array",
                    arrayFields: {
                        name: { type: "text", contentEditable: true },
                        logo: { type: "text" },
                        scale: {
                            type: "number",
                            label: "Logo Scale (0.1 to 2)",
                            min: 0.1,
                            max: 2,
                            step: 0.1,
                        },
                        description: { type: "textarea", contentEditable: true },
                    },
                    getItemSummary: (item) => item.name || "Brand",
                },
            },
            render: ({ title, description, brands }) => {
                const tCommon = useTranslations('Common');
                return (
                    <section className="py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold section-heading-center mb-6">
                                    {title || tCommon('OurBrands')}
                                </h2>
                                {description && (
                                    <p className="text-lg text-slate-600 max-w-3xl mx-auto font-sans opacity-90">
                                        {description}
                                    </p>
                                )}
                            </div>
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-12"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.2
                                        }
                                    }
                                }}
                            >
                                {(brands || []).map((brand: any, i: number) => {
                                    return (
                                        <motion.div
                                            key={`${brand.name}-${i}`}
                                            className="bg-slate-50 p-10 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
                                            variants={{
                                                hidden: { opacity: 0, y: 40 },
                                                show: { opacity: 1, y: 0 }
                                            }}
                                            transition={{ duration: 0.7, ease: "easeOut" }}
                                        >
                                            <div className="h-24 w-full relative mb-8 transition-all duration-500 flex items-center justify-center p-4 bg-slate-100 rounded-lg">
                                                {brand.logo && (brand.logo.startsWith('http') || brand.logo.startsWith('/')) ? (
                                                    <img
                                                        src={brand.logo}
                                                        alt={typeof brand.name === 'string' ? brand.name : "Brand"}
                                                        className="max-h-full max-w-full object-contain"
                                                        style={{
                                                            transform: `scale(${(brand.scale || 1) * (String(brand.name || '').toLowerCase().includes('weinman') ? 1.28 : String(brand.name || '').toLowerCase().includes('paragon') ? 1.4 : 1)})`
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="text-[10px] text-slate-400">
                                                        {brand.logo ? "Validating..." : "No Logo"}
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">
                                                {brand.name}
                                            </h3>
                                            <p className="text-slate-600 text-base leading-relaxed font-sans">
                                                {brand.description}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>
                );
            },
        },
        ShortCTA: {
            fields: {
                title: { type: "text", contentEditable: true },
                subtitle: { type: "textarea", contentEditable: true },
                ctaText: { type: "text", contentEditable: true },
                ctaHref: { type: "text" },
                bgImage: { type: "text" },
                bgSize: {
                    type: "radio",
                    options: [
                        { label: "Cover", value: "cover" },
                        { label: "Contain", value: "contain" },
                    ],
                },
            },
            defaultProps: {
                title: "ABEX Engineering",
                subtitle: "Reliable Water Pump Solutions for Every Industry.",
                ctaText: "Contact Us Today",
                ctaHref: "/contact",
                bgImage: "/images/pump-pic1.jpeg",
                bgSize: "cover",
            },
            render: ({ title, subtitle, ctaText, ctaHref, bgImage, bgSize, puck }) => (
                <section className="relative py-32 overflow-hidden">
                    {bgImage ? (
                        <div className="absolute inset-0 z-0">
                            <img src={bgImage} className={`w-full h-full ${bgSize === 'contain' ? 'object-contain' : 'object-cover'}`} alt="" />
                            <div className="absolute inset-0 bg-slate-900/80" />
                        </div>
                    ) : (
                        <div className="absolute inset-0 bg-slate-900 z-0" />
                    )}
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {title}
                            </h2>
                            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
                                {subtitle}
                            </p>
                            {ctaText && (
                                <a
                                    href={ctaHref || "#"}
                                    className="h-16 inline-flex items-center px-12 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-2xl hover:-translate-y-1"
                                    onClick={(e) => { if (puck && puck.isEditing) e.preventDefault(); }}
                                >
                                    {ctaText}
                                </a>
                            )}
                        </motion.div>
                    </div>
                </section>
            )
        },
        CompanyCertifications: {
            render: () => <CompanyCertifications />
        }
    },
};
