function LogoMarquee() {
    const logos = [
        "/images/logos/oggivium.png",
        "/images/logos/hacettepe.png",
        "/images/logos/rigelcore.png",
        "/images/logos/socy.png",
        "/images/logos/teknokent.png",
        "/images/logos/tusas.png",
        "/images/logos/aselsan.png",
        "/images/logos/armelsan.png",
        "/images/logos/tpao.png",
        "/images/logos/arcelik.png",
        "/images/logos/ado.png",
        "/images/logos/mke.png",
        "/images/logos/sayra.png",
        "/images/logos/intra.png",
        "/images/logos/mensan.png",
        "/images/logos/milmast.png",
        "/images/logos/gazi.png",
        "/images/logos/kultur.png",
        "/images/logos/artsoy.png",
        "/images/logos/lumicle.png",
    ];

    return (
        <>
            <style>
                {`
                    .logoMarquee {
                        width: 100%;
                        overflow: hidden;
                        padding: 28px 0;
                        position: relative;
                    }

                    .logoTrack {
                        display: flex;
                        width: max-content;
                        animation: logoScroll 55s linear infinite;
                    }

                    .logoGroup {
                        display: flex;
                        align-items: center;
                        gap: 44px;
                        padding-right: 44px;
                        flex-shrink: 0;
                    }

                    .logoGroup img {
                        height: 30px;
                        width: 100px;
                        object-fit: contain;
                        flex-shrink: 0;
                        display: block;
                    }

                    @keyframes logoScroll {
                        from {
                            transform: translateX(0);
                        }

                        to {
                            transform: translateX(calc(-100% / 3));
                        }
                    }

                    @media (min-width: 768px) {
                        .logoGroup {
                            gap: 56px;
                            padding-right: 56px;
                        }

                        .logoGroup img {
                            height: 38px;
                            width: 130px;
                        }
                    }

                    @media (min-width: 1024px) {
                        .logoGroup {
                            gap: 72px;
                            padding-right: 72px;
                        }

                        .logoGroup img {
                            height: 105px;
                            width: 350px;
                        }

                        .logoMarquee:hover img {
                            filter: grayscale(0%);
                        }
                    }
                `}
            </style>

            <div className="logoMarquee">
                <div className="logoTrack">
                    {[0, 1, 2].map((group) => (
                        <div className="logoGroup" key={group}>
                            {logos.map((logo, index) => (
                                <img
                                    key={`${group}-${index}`}
                                    src={logo}
                                    alt=""
                                    draggable={false}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default LogoMarquee;