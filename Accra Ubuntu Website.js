import React, { useState } from "react";
import {
    Users,
    Award,
    Calendar,
    Info,
    Mail,
    ChevronRight,
    Heart,
    Globe,
    Menu,
    X,
    ExternalLink,
    ShieldCheck,
    Zap,
} from "lucide-react";

const App = () => {
    const [activeTab, setActiveTab] = useState("lions"); // 'lions' or 'leos'
    const [currentPage, setCurrentPage] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clubData = {
        lions: {
            name: "Accra Ubuntu Lions Club",
            slogan: "I am because you are",
            description:
                "Chartered under District 418, we are a group of dedicated volunteers committed to humanitarian service. We believe our strength lies in our community.",
            themeColor: "bg-blue-900",
            accentColor: "text-yellow-500",
            hoverColor: "hover:bg-blue-800",
            lightAccent: "bg-yellow-500",
            leadership: [
                { role: "President", name: "[Name of President]", image: null },
                { role: "Secretary", name: "[Name of Secretary]", image: null },
                { role: "Treasurer", name: "[Name of Treasurer]", image: null },
                { role: "Membership Chair", name: "[Name of Chair]", image: null },
            ],
            recognitions: [
                {
                    title: "Club of the Year 2022/2023",
                    body: "Awarded by District 418 for excellence in service and administration.",
                    icon: <Award className="w-8 h-8 text-yellow-500" />,
                },
                {
                    title: "Global Service Action Award",
                    body: "Recognized for impactful projects in vision and hunger relief.",
                    icon: <Globe className="w-8 h-8 text-blue-500" />,
                },
                {
                    title: "Top Membership Growth",
                    body: "Consistently growing our pride to serve more communities.",
                    icon: <Users className="w-8 h-8 text-green-500" />,
                },
            ],
            activities: [
                {
                    date: "Oct 2023",
                    title: "Vision Screening at Makola",
                    desc: "Provided free eye exams and spectacles to over 200 traders.",
                },
                {
                    date: "Aug 2023",
                    title: "Environmental Clean-up",
                    desc: "Collaborated with local authorities for a coastal sanitation drive.",
                },
                {
                    date: "May 2023",
                    title: "Hunger Relief Program",
                    desc: "Donated food items to three orphanages in the Greater Accra region.",
                },
            ],
        },
        leos: {
            name: "Accra Ubuntu Leo Club",
            slogan: "I am because you are",
            description:
                "The youth wing of our pride, empowering young leaders between 18-30 to serve their community while developing professional skills through the spirit of Ubuntu.",
            themeColor: "bg-red-800",
            accentColor: "text-orange-400",
            hoverColor: "hover:bg-red-700",
            lightAccent: "bg-orange-400",
            leadership: [
                { role: "Leo President", name: "[Name of President]", image: null },
                { role: "Leo Secretary", name: "[Name of Secretary]", image: null },
                { role: "Leo Treasurer", name: "[Name of Treasurer]", image: null },
                { role: "Leo Advisor", name: "[Name of Lion Advisor]", image: null },
            ],
            recognitions: [
                {
                    title: "Best Leo Club Project 2023",
                    body: "Awarded for the 'Tech for Teens' mentorship initiative.",
                    icon: <Award className="w-8 h-8 text-orange-400" />,
                },
                {
                    title: "Leo Excellence Award",
                    body: "Recognizing our president for outstanding leadership qualities.",
                    icon: <Heart className="w-8 h-8 text-red-500" />,
                },
            ],
            activities: [
                {
                    date: "Nov 2023",
                    title: "Youth Career Fair",
                    desc: "Connected 50+ graduates with industry mentors.",
                },
                {
                    date: "Sept 2023",
                    title: "Tree Planting Initiative",
                    desc: "Planted 100 saplings at a local school compound.",
                },
                {
                    date: "June 2023",
                    title: "School Supplies Drive",
                    desc: "Provided stationery for underprivileged students returning to school.",
                },
            ],
        },
    };

    const currentClub = clubData[activeTab];

    const toggleClub = () => {
        setActiveTab(activeTab === "lions" ? "leos" : "lions");
        setCurrentPage("home");
        setIsMenuOpen(false);
    };

    const NavItem = ({ page, label }) => (
        <button
            onClick={() => {
                setCurrentPage(page);
                setIsMenuOpen(false);
            }}
            className={`px-4 py-2 text-sm font-medium transition-colors ${currentPage === page ? "border-b-2 border-white" : "hover:opacity-80"
                }`}
        >
            {label}
        </button>
    );

    return (
        <div className="min-h-screen font-sans bg-gray-50 text-gray-900 transition-colors duration-500">
            {/* Navigation Bar */}
            <nav
                className={`${currentClub.themeColor} text-white sticky top-0 z-50 shadow-lg transition-colors duration-500`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        {/* Logo Section */}
                        <div
                            className="flex items-center space-x-3 cursor-pointer"
                            onClick={() => setCurrentPage("home")}
                        >
                            <div className="bg-white p-2 rounded-xl shadow-inner">
                                <Users
                                    className={`w-6 h-6 ${activeTab === "lions" ? "text-blue-900" : "text-red-800"
                                        }`}
                                />
                            </div>
                            <div>
                                <span className="font-bold text-lg md:text-xl block leading-tight tracking-tight">
                                    {currentClub.name}
                                </span>
                                <span
                                    className={`text-[10px] md:text-xs uppercase font-black tracking-[0.2em] ${currentClub.accentColor}`}
                                >
                                    {currentClub.slogan}
                                </span>
                            </div>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center space-x-2">
                            <NavItem page="home" label="Home" />
                            <NavItem page="activities" label="Service Projects" />
                            <NavItem page="recognition" label="Awards" />
                            <NavItem page="leadership" label="Leadership" />
                            <button
                                onClick={toggleClub}
                                className="ml-6 bg-white text-gray-900 px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:shadow-xl hover:scale-105 transition-all"
                            >
                                Switch to {activeTab === "lions" ? "Leos" : "Lions"}
                                <ExternalLink className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 hover:bg-white/10 rounded-lg"
                            >
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav Menu */}
                {isMenuOpen && (
                    <div
                        className={`lg:hidden ${currentClub.themeColor} border-t border-white/10 pb-6 px-4 animate-in slide-in-from-top duration-300`}
                    >
                        <div className="flex flex-col space-y-2 pt-4">
                            <button
                                onClick={() => {
                                    setCurrentPage("home");
                                    setIsMenuOpen(false);
                                }}
                                className="text-left py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => {
                                    setCurrentPage("activities");
                                    setIsMenuOpen(false);
                                }}
                                className="text-left py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Service Projects
                            </button>
                            <button
                                onClick={() => {
                                    setCurrentPage("recognition");
                                    setIsMenuOpen(false);
                                }}
                                className="text-left py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Awards & Recognition
                            </button>
                            <button
                                onClick={() => {
                                    setCurrentPage("leadership");
                                    setIsMenuOpen(false);
                                }}
                                className="text-left py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Leadership
                            </button>
                            <div className="pt-4 border-t border-white/10">
                                <button
                                    onClick={toggleClub}
                                    className="w-full bg-white text-gray-900 px-4 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                                >
                                    Switch to {activeTab === "lions" ? "Leos" : "Lions"}
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content Area */}
            <main className="animate-in fade-in duration-700">
                {currentPage === "home" && (
                    <>
                        {/* Hero Section */}
                        <section
                            className={`${currentClub.themeColor} text-white py-24 md:py-32 px-4 overflow-hidden relative transition-colors duration-500`}
                        >
                            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
                                <div className="md:w-1/2 space-y-8">
                                    <div
                                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/20 mb-2`}
                                    >
                                        <ShieldCheck
                                            className={`w-4 h-4 ${currentClub.accentColor}`}
                                        />
                                        A District 418 Pride
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
                                        "
                                        <span className={currentClub.accentColor}>
                                            {currentClub.slogan}
                                        </span>
                                        "
                                    </h1>
                                    <p className="text-xl opacity-90 max-w-lg leading-relaxed font-light">
                                        {currentClub.description} In Accra Ubuntu, we serve because
                                        our shared humanity demands it.
                                    </p>
                                    <div className="flex flex-wrap gap-4 pt-6">
                                        <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all">
                                            Join Our Pride
                                        </button>
                                        <button className="border-2 border-white/30 backdrop-blur-sm px-10 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all">
                                            Support a Project
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
                                    <div className="relative group">
                                        <div
                                            className={`absolute -inset-8 ${currentClub.accentColor.replace(
                                                "text-",
                                                "bg-"
                                            )} opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity`}
                                        ></div>
                                        <div className="w-72 h-72 md:w-96 md:h-96 bg-white/10 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center p-12 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                            <Heart className="w-full h-full text-white opacity-90 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <Users size={600} />
                            </div>
                        </section>

                        {/* Quick Stats/Philosophy */}
                        <section className="py-24 px-4 max-w-7xl mx-auto -mt-12 relative z-20">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all group">
                                    <div
                                        className={`${activeTab === "lions" ? "bg-blue-50" : "bg-red-50"
                                            } w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                                    >
                                        <Heart
                                            className={
                                                activeTab === "lions" ? "text-blue-600" : "text-red-600"
                                            }
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To empower volunteers to serve their communities and meet
                                        humanitarian needs, guided by the belief that we are
                                        stronger together.
                                    </p>
                                </div>
                                <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all group">
                                    <div
                                        className={`${activeTab === "lions" ? "bg-yellow-50" : "bg-orange-50"
                                            } w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                                    >
                                        <Globe
                                            className={
                                                activeTab === "lions"
                                                    ? "text-yellow-600"
                                                    : "text-orange-600"
                                            }
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Ubuntu Philosophy</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        "I am because you are." We believe our individual success is
                                        intrinsically linked to the well-being of those around us.
                                    </p>
                                </div>
                                <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all group">
                                    <div
                                        className={`${activeTab === "lions" ? "bg-green-50" : "bg-green-50"
                                            } w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
                                    >
                                        <Users className="text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Fellowship</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Join a network of compassionate individuals in Accra
                                        dedicated to making a tangible difference in society through
                                        friendship.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {currentPage === "activities" && (
                    <section className="py-24 px-4 max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span
                                className={`text-sm font-black uppercase tracking-[0.3em] ${currentClub.accentColor} mb-4 block`}
                            >
                                Community Impact
                            </span>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                                Service Projects
                            </h2>
                            <div
                                className={`h-1.5 w-32 ${currentClub.themeColor} mx-auto rounded-full`}
                            ></div>
                            <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg italic">
                                Our motto in action: Helping our community grow because their
                                growth is our growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {currentClub.activities.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
                                >
                                    <div
                                        className={`h-56 ${currentClub.themeColor} flex items-center justify-center relative transition-colors duration-500`}
                                    >
                                        <Zap className="w-20 h-20 text-white/10 group-hover:scale-125 transition-transform duration-700" />
                                        <span className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {item.date}
                                        </span>
                                    </div>
                                    <div className="p-10 flex-grow">
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed mb-8">
                                            {item.desc}
                                        </p>
                                        <button
                                            className={`flex items-center gap-2 text-sm font-black uppercase tracking-widest ${activeTab === "lions" ? "text-blue-900" : "text-red-800"
                                                }`}
                                        >
                                            View Details <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {currentPage === "recognition" && (
                    <section className="py-24 px-4 max-w-5xl mx-auto">
                        <div className="text-center mb-20">
                            <span
                                className={`text-sm font-black uppercase tracking-[0.3em] ${currentClub.accentColor} mb-4 block`}
                            >
                                Our Pride
                            </span>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                                Honors & Awards
                            </h2>
                            <div
                                className={`h-1.5 w-32 ${currentClub.themeColor} mx-auto rounded-full`}
                            ></div>
                            <p className="mt-8 text-gray-500 text-lg italic italic">
                                Celebrating excellence in humanitarian service across District
                                418.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {currentClub.recognitions.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col md:flex-row items-center gap-10 bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all"
                                >
                                    <div className="flex-shrink-0 bg-gray-50 p-8 rounded-[2rem]">
                                        {item.icon}
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-3xl font-extrabold mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-lg leading-relaxed">
                                            {item.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {currentPage === "leadership" && (
                    <section className="py-24 px-4 max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span
                                className={`text-sm font-black uppercase tracking-[0.3em] ${currentClub.accentColor} mb-4 block`}
                            >
                                Executive Board
                            </span>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                                Our Leadership
                            </h2>
                            <div
                                className={`h-1.5 w-32 ${currentClub.themeColor} mx-auto rounded-full`}
                            ></div>
                            <p className="mt-8 text-gray-500 text-lg italic">
                                The dedicated individuals guiding our pride in the 2023/2024
                                service year.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {currentClub.leadership.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all group"
                                >
                                    <div
                                        className={`w-32 h-32 ${currentClub.themeColor} opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform`}
                                    >
                                        <Users className="w-12 h-12 text-gray-900" />
                                    </div>
                                    <h4 className="text-xl font-extrabold mb-1">{member.name}</h4>
                                    <p
                                        className={`text-sm font-bold uppercase tracking-widest ${currentClub.accentColor}`}
                                    >
                                        {member.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Contact Section */}
                <section className="bg-gray-100 py-24 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
                                Connect with the <br />
                                {activeTab === "lions" ? "Lions" : "Leos"} of Accra
                            </h2>
                            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                                Whether you want to volunteer, donate, or invite us to a
                                project, our door is always open. Remember, we are because you
                                are.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 group">
                                    <div
                                        className={`w-14 h-14 rounded-2xl ${currentClub.themeColor} flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12`}
                                    >
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                            Email Us
                                        </p>
                                        <span className="text-lg font-bold">
                                            hello@{activeTab}accraubuntu.org
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div
                                        className={`w-14 h-14 rounded-2xl ${currentClub.themeColor} flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12`}
                                    >
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                            Our Location
                                        </p>
                                        <span className="text-lg font-bold">
                                            Accra, Greater Accra, Ghana
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div
                                className={`absolute top-0 right-0 w-32 h-32 ${currentClub.accentColor.replace(
                                    "text-",
                                    "bg-"
                                )} opacity-5 -mr-16 -mt-16 rounded-full`}
                            ></div>
                            <form
                                className="space-y-6 relative z-10"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    className={`w-full py-5 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl transition-all ${currentClub.themeColor} ${currentClub.hoverColor} active:scale-95`}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer
                className={`${currentClub.themeColor} text-white/80 py-16 px-4 transition-colors duration-500 border-t border-white/5`}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <Users className={`w-8 h-8 ${currentClub.accentColor}`} />
                            <h3 className="text-2xl font-black tracking-tight text-white">
                                {currentClub.name}
                            </h3>
                        </div>
                        <p className="text-sm font-medium italic opacity-70 italic">
                            "{currentClub.slogan}"
                        </p>
                    </div>

                    <div className="flex justify-center gap-10">
                        <button className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                            Facebook
                        </button>
                        <button className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                            Instagram
                        </button>
                        <button className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                            Twitter
                        </button>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-xs font-bold opacity-50 uppercase tracking-widest">
                            © {new Date().getFullYear()} Accra Ubuntu Lions Club. <br />
                            District 418, Ghana.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Bottom Floating Switcher (Visual Hint) */}
            <div className="fixed bottom-8 right-8 z-40 hidden md:block">
                <button
                    onClick={toggleClub}
                    className="group relative bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 rounded-[2rem] border border-gray-100 flex items-center gap-4 transition-all hover:-translate-y-2 active:scale-95"
                >
                    <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${activeTab === "lions" ? "bg-red-800" : "bg-blue-900"
                            } text-white shadow-inner transition-colors duration-500`}
                    >
                        {activeTab === "lions" ? "LE" : "LI"}
                    </div>
                    <div className="text-left pr-4">
                        <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
                            View Other Group
                        </p>
                        <p className="text-sm font-extrabold text-gray-900">
                            Go to {activeTab === "lions" ? "Leos" : "Lions"}
                        </p>
                    </div>
                    <div
                        className={`absolute -top-1 -right-1 w-4 h-4 ${currentClub.lightAccent} rounded-full animate-ping`}
                    ></div>
                </button>
            </div>
        </div>
    );
};

export default App;

// Render logic for live preview
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
