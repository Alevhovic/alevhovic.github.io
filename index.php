<?php
	
	// -------------------------------------------------------
	// --- Projet : Déploiement
	// --- Version: 1.0.0
	// --- Auteur : Cyril L. A2DW3
	// --- URL Web: https://www.lamirand-cyril.fr/Portfolio/
	// -------------------------------------------------------

	// Session
	include_once("php/session.php");

	// Doctype
	echo '<!DOCTYPE html>';
	echo '<html lang="fr">';
	echo '<head>';

	include_once("php/head.php");

	echo '</head>';
	echo '<body>';
	echo '<header>';

	// Navigation du mini-site
	include_once("php/navbar.php");

	// Tutoriel
	include_once("php/tutorial.php");

	echo '</header>';
	echo '<main>';
	echo '<div id="fullpage">';	

	// Section : Présentation
	echo '<div class="section">';
	include_once("php/aboutme.php");
	echo '</div>';

	// Section : Expériences Professionnelles
	echo '<div class="section">';
	include_once("php/experience.php");
	echo '</div>';

	// Section : Projets Réalisées
	echo '<div class="section">';
	include_once("php/project.php");
	echo '</div>';

	// Section : Contactez-moi 
	echo '<div class="section">';
	include_once("php/contact.php");
	echo '</div>';

	echo '</div>';
	echo '</main>';
	echo '<footer>';

	// Footer du site
	include_once("php/footer.php");

	echo '</footer>';

	// jQuery & Bootstrap & Fullpage
	include_once("php/js.php");

	echo '</body>';
	echo '</html>';
	
?>