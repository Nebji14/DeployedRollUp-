import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/Common/Button";

export default function MentionLeg() {
  return (
    <div className="w-full">
      <section className="w-full h-screen bg-donjon bg-cover bg-center overflow-hidden">
        {/* Conteneur scrollable unique */}
        <div className="h-full overflow-y-auto scroll-smooth">
          {/* Bloc de contenu unique */}
          <div className="flex flex-col items-center gap-6 p-8">
            {/* Titre */}
            <h1 className="text-5xl font-bold text-center mt-16 text-[#f3cc7a]">
              Mentions Légales
            </h1>

            {/* Corps du texte */}
            <div className="max-w-xl space-y-6 text-start text-[#F2EEE8] pb-16">
              <h2 className="text-[20px] font-semibold">
                1. Informations Légales
              </h2>
              <p>
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin
                2004 pour la confiance en l'économie numérique, il est précisé
                aux utilisateurs du site l'identité des différents intervenants
                dans le cadre de sa réalisation et de son suivi :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Propriétaire du site :</strong> RollUp!
                </li>
                <li>
                  <strong>Adresse :</strong> 123 Rue de la Taverne, 75001
                  Donjonville (Adresse fictive)
                </li>
                <li>
                  <strong>Adresse e-mail :</strong> rollupjdr@gmail.com
                </li>
                <li>
                  <strong>Numéro de téléphone :</strong> 01 23 45 67 89 (Numéro
                  fictif)
                </li>
              </ul>

              <h2 className="text-[20px] font-semibold">2. Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Hébergeur Front-End (Netlify) :</strong>
                  <ul className="list-circle pl-5 ml-5 space-y-1 mt-1">
                    <li>
                      <strong>Nom :</strong> Netlify, Inc.
                    </li>
                    <li>
                      <strong>Adresse :</strong> 44 Montgomery St STE 300, San
                      Francisco, CA 94104, United States
                    </li>
                    <li>
                      <strong>Site web :</strong> https://www.netlify.com
                    </li>
                  </ul>
                </li>
                <li className="pt-2">
                  <strong>Hébergeur Back-End (Render) :</strong>
                  <ul className="list-circle pl-5 ml-5 space-y-1 mt-1">
                    <li>
                      <strong>Nom :</strong> Render Services, Inc.
                    </li>
                    <li>
                      <strong>Adresse :</strong> San Francisco, California,
                      United States
                    </li>
                    <li>
                      <strong>Site web :</strong> https://render.com
                    </li>
                  </ul>
                </li>
              </ul>

              <h2 className="text-[20px] font-semibold">
                3. Propriété Intellectuelle
              </h2>
              <p>
                L'ensemble de ce site relève de la législation française et
                internationale sur le droit d'auteur et la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable de <strong>RollUp!</strong>.
              </p>

              <h2 className="text-[20px] font-semibold">
                4. Limitations de Responsabilité
              </h2>
              <p>
                <strong>RollUp!</strong> ne pourra être tenu responsable des
                dommages directs et indirects causés au matériel de
                l'utilisateur, lors de l'accès au site, et résultant soit de
                l'utilisation d'un matériel ne répondant pas aux spécifications
                indiquées, soit de l'apparition d'un bug ou d'une
                incompatibilité.
              </p>
              <p>
                <strong>RollUp!</strong> ne pourra également être tenu
                responsable des dommages indirects (tels par exemple qu'une
                perte de marché ou perte d'une chance) consécutifs à
                l'utilisation du site.
              </p>

              <h2 className="text-[20px] font-semibold">
                5. Gestion des Données Personnelles
              </h2>
              <p>
                En France, les données personnelles sont notamment protégées par
                la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août
                2004, l'article L. 226-13 du Code pénal et la Directive
                Européenne du 24 octobre 1995.
              </p>
              <p>
                Une politique de confidentialité détaillée concernant le
                traitement de vos données personnelles est disponible sur notre
                page de Politique de Confidentialité.
              </p>

              <h2 className="text-[20px] font-semibold">
                6. Droit Applicable et Attribution de Juridiction
              </h2>
              <p>
                Tout litige en relation avec l'utilisation du site est soumis au
                droit français. Il est fait attribution exclusive de juridiction
                aux tribunaux compétents de Paris.
              </p>

              {/* Bouton de retour */}
              <NavLink to="/" className="flex justify-center pt-8">
                <Button
                  color="primary"
                  text="Retour"
                  className="px-6 py-3 mt-4"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
