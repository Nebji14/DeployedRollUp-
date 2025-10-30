import Table from "../models/Table.schema.js";

// Lister toutes les tables
export const getAllTables = async (req, res) => {
  try {
    // Récupère les paramètres de recherche envoyés par le front
    const { search, niveau, systeme } = req.query;

    const filter = {};

    // Si le front envoie un texte à rechercher
    if (search) {
      // Recherche dans le titre ou dans le synopsis
      filter.$or = [
        { titre: { $regex: search, $options: "i" } },
        { synopsis: { $regex: search, $options: "i" } },
      ];
    }

    // Si le front envoie un niveau
    if (niveau) {
      filter.niveau = niveau;
    }

    // Si le front envoie un système
    if (systeme) {
      filter.systeme = systeme;
    }

    // Recherche les tables qui correspondent aux filtres
    const tables = await Table.find(filter)
      .sort({ createdAt: -1 }) // Tri par date de création (plus récentes d'abord)
      .populate("user", "pseudo email"); // Affiche le pseudo et email du créateur

    // Renvoie les tables trouvées
    res.status(200).json(tables);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Récupérer une table par ID
export const getTableById = async (req, res) => {
  try {
    const table = await Table.findById(req.params.id);
    if (!table) return res.status(404).json({ message: "Table non trouvée" });
    res.status(200).json(table);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Créer une nouvelle table
export const createTable = async (req, res) => {
  try {
    const {
      titre,
      discord,
      roll20,
      image,
      nbJoueurs,
      niveau,
      systeme,
      synopsis,
    } = req.body;

    const table = await Table.create({
      titre,
      discord,
      roll20,
      image,
      nbJoueurs,
      niveau,
      systeme,
      synopsis,
      user: req.user._id,
    });

    res.status(201).json(table);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mettre à jour une table
export const updateTable = async (req, res) => {
  try {
    const table = await Table.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!table) return res.status(404).json({ message: "Table non trouvée" });
    res.status(200).json(table);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une table
export const deleteTable = async (req, res) => {
  try {
    const table = await Table.findByIdAndDelete(req.params.id);
    if (!table) return res.status(404).json({ message: "Table non trouvée" });
    res.status(200).json({ message: "Table supprimée avec succès" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
