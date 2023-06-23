"use client";
import React from 'react';
import css from './lexique.module.scss';
import ParticleBackground from "../../components/particle/particleBackground";

export default function page() {
    return (
        <div className={css.container}>
            <ParticleBackground />
            <div className={css.contain}>
                <h2>Lexique</h2>
                <p className={css.presentation}>Afin de vous faciliter la compréhension de ce que nous vous proposons, voici un lexique, pour les personnes les plus aguerries, ce lexique va vous paraitre enfantin, imagé, mais c'est justement la définition de l'accessibilité* (voir ci-dessous)</p>
                <div className={css.definition}>
                    <h3>titre:</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam vel, mollitia quia quaerat placeat quas! Cumque, saepe amet! Totam ipsa dolor nemo ipsam est, quaerat adipisci recusandae voluptate placeat.
                    </p>
                </div>
                <div className={css.definition}>
                    <h3>titre:</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias commodi corporis iusto voluptates asperiores aliquid saepe libero harum recusandae incidunt ipsum voluptatum.
                    </p>
                </div>
                <div className={css.definition}>
                    <h3>titre:</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias commodi corporis iusto voluptates asperiores aliquid saepe libero harum recusandae incidunt ipsum voluptatum.
                    </p>
                </div>
                <div className={css.definition}>
                    <h3>titre:</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia, tenetur unde perspiciatis dignissimos ab laborum, alias commodi corporis iusto voluptates asperiores aliquid saepe libero harum recusandae incidunt ipsum voluptatum.
                    </p>
                </div>
            </div>
        </div>
    );
};

