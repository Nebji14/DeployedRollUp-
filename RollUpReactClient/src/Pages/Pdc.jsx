import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/Common/Button";

export default function Pdc() {
  return (
    <div className="w-full">
      <section className="w-full h-screen bg-donjon bg-cover bg-center overflow-hidden">
        {/* Conteneur scrollable unique */}
        <div className="h-full overflow-y-auto scroll-smooth">
          {/* Bloc de contenu unique */}
          <div className="flex flex-col items-center gap-6 p-8">
            {/* Titre */}
            <h1 className="text-5xl font-bold text-center mt-16 text-[#f3cc7a]">
              Politique de Confidentialité de RollUp!
            </h1>

            {/* Corps du texte (Ancien Bloc 2) */}
            <div className="max-w-xl space-y-6 text-start text-[#F2EEE8] pb-16">
              <h2 className="text-[20px] font-semibold">
                Dernière mise à jour : 10/11/2025
              </h2>

              <h2 className="text-[20px] font-semibold">1. Introduction</h2>
              <p>
                La présente Politique de Confidentialité décrit comment RollUp!
                collecte, utilise et protège les informations que vous nous
                fournissez lorsque vous utilisez notre site internet RollUp!.
                Nous nous engageons à protéger votre vie privée et vos données
                personnelles. En utilisant notre site, vous consentez à la
                collecte et à l'utilisation de vos informations conformément à
                cette politique.
              </p>

              <h2 className="text-[20px] font-semibold">
                2. Collecte des Informations Personnelles
              </h2>
              <p>Nous pouvons collecter les types d'informations suivants :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Informations d'identification personnelle :</strong>
                  Nom, pseudo, adresse e-mail, et niveau de pratique (Débutant,
                  Intermédiaire, Expert) lorsque vous nous les fournissez
                  volontairement via le formulaire d'inscription.
                </li>
                <li>
                  <strong>Contenu généré par l'utilisateur :</strong>
                  Informations que vous fournissez lors de la création d'une
                  table de jeu, comme le titre, le synopsis, le système de jeu,
                  la fréquence, le niveau requis, le nombre de joueurs, et les
                  liens vers des services externes (Discord, Roll20).
                </li>
                <li>
                  <strong>Données d'utilisation :</strong> Informations sur la
                  manière dont vous accédez et utilisez le site, y compris votre
                  adresse IP, type de navigateur, pages visitées, temps passé
                  sur les pages.
                </li>
                <li>
                  <strong>Cookies et technologies de suivi :</strong> Nous
                  utilisons des cookies et des technologies similaires pour
                  suivre l'activité sur notre site.
                </li>
              </ul>

              <h2 className="text-[20px] font-semibold">
                3. Utilisation des Informations Collectées
              </h2>
              <p>Les informations que nous collectons sont utilisées pour :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fournir, exploiter et maintenir notre site.</li>
                <li>Créer et gérer votre compte utilisateur.</li>
                <li>
                  Valider votre adresse e-mail lors de l'inscription et pour la
                  réinitialisation de votre mot de passe (via Nodemailer).
                </li>
                <li>
                  Vous permettre de créer, publier, modifier et gérer vos tables
                  de jeu.
                </li>
                <li>
                  Permettre aux autres utilisateurs de trouver vos tables de
                  jeu.
                </li>
                <li>
                  Améliorer et personnaliser votre expérience sur notre site.
                </li>
                <li>
                  Comprendre et analyser la façon dont vous utilisez notre site.
                </li>
                <li>Prévenir la fraude et assurer la sécurité.</li>
              </ul>

              <h2 className="text-[20px] font-semibold">
                4. Partage des Informations
              </h2>
              <p>
                Nous ne vendons, n'échangeons ni ne louons vos informations
                personnelles à des tiers. Nous pouvons partager des informations
                avec des prestataires de services tiers qui nous aident à
                exploiter notre site :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Hébergement :</strong> Notre back-end est hébergé sur
                  Render et notre front-end sur Netlify. Ces plateformes
                  hébergent les données de l'application.
                </li>
                <li>
                  <strong>Stockage d'images :</strong> Les images que vous
                  téléchargez pour vos tables de jeu sont gérées et stockées via
                  le service Supabase Storage.
                </li>
              </ul>
              <p>
                Nous pouvons également divulguer vos informations lorsque la loi
                l'exige ou pour protéger nos droits.
              </p>

              <h2 className="text-[20px] font-semibold">
                5. Sécurité des Données
              </h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité raisonnables
                (hachage de mot de passe avec Bcrypt, tokens JWT, cookies
                httpOnly) pour protéger vos informations personnelles.
              </p>
              <p>
                Cependant, aucune méthode de transmission sur Internet n'est
                totalement sécurisée. Bien que nous nous efforcions de protéger
                vos informations, nous ne pouvons garantir leur sécurité
                absolue.
              </p>

              <h2 className="text-[20px] font-semibold">
                6. Vos Droits en Matière de Protection des Données (RGPD)
              </h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Droit d'accès :</strong> Vous avez le droit d'accéder
                  aux données que nous détenons sur vous.
                </li>
                <li>
                  <strong>Droit de rectification :</strong> Vous avez le droit
                  de demander la correction des données inexactes.
                </li>
                <li>
                  <strong>Droit à l'effacement (« droit à l'oubli ») :</strong>{" "}
                  Vous avez le droit de demander la suppression de votre compte
                  et de vos données personnelles.
                </li>
                <li>Droit à la limitation du traitement.</li>
                <li>Droit à la portabilité des données.</li>
                <li>Droit d'opposition.</li>
                <li>Droit de retirer votre consentement à tout moment.</li>
                <li>Droit de déposer une plainte auprès de la CNIL.</li>
              </ul>
              <p>
                Pour exercer l'un de ces droits, veuillez nous contacter à
                **rollupjdr@gmail.com**.
              </p>

              <h2 className="text-[20px] font-semibold">7. Cookies</h2>
              <p>
                Notre site utilise des cookies essentiels au fonctionnement de
                l'authentification. Vous pouvez configurer votre navigateur pour
                refuser les cookies, mais cela peut affecter certaines
                fonctionnalités du site.
              </p>

              <h2 className="text-[20px] font-semibold">
                8. Liens vers d'autres Sites
              </h2>
              <p>
                Notre site contient des liens vers d'autres sites (ex: Discord,
                Roll20). Nous n'avons aucun contrôle sur ces sites et vous
                encourageons à consulter leurs propres politiques de
                confidentialité.
              </p>

              <h2 className="text-[20px] font-semibold">
                9. Modifications de cette Politique de Confidentialité
              </h2>
              <p>
                Nous pouvons mettre à jour cette Politique de temps à autre.
                Nous vous informerons de tout changement en publiant la nouvelle
                politique sur cette page.
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
