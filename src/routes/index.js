import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import RedefinirSenha from "../pages/Authentication/RedefinirSenha";
import EsqueciMinhaSenha from "../pages/Authentication/EsqueciMinhaSenha";
import AuthLockScreen from "../pages/Authentication/AuthLockScreen";

// Dashboard
import Dashboard from "../pages/Dashboard/index";

import Perfil from "../pages/Perfil/index";

import CadastroMembros from "../pages/Authentication/CadastroMembros";

import Hemoterapia from "../pages/Hemoterapia";
import HemoterapiaOpcoes from "../pages/HemoterapiaOpcoes";

import HemoterapiaColeta from "../pages/HemoterapiaColeta";
import HemoterapiaCuidados from "../pages/HemoterapiaCuidados";
import HemoterapiaHemocomponentes from "../pages/HemoterapiaHemocomponentes";
import HemoterapiaReacoes from "../pages/HemoterapiaReacoes";

import Protocolos from "../pages/Protocolos";
import ProtocolosDrogas from "../pages/ProtocolosDrogas";

import Drogas from "../pages/Drogas";
import DrogasCategorias from "../pages/DrogasCategorias";

import Parceiros from "../pages/Parceiros";

import Procedimentos from "../pages/Procedimentos";
import Suporte from "../pages/Suporte";

import Hemocomponentes from "../pages/Hemocomponentes";

import CuidadosEspeciais from "../pages/CuidadosEspeciais";

import ReacoesTransfusionais from "../pages/ReacoesTransfusionais";

//Icons
import RemixIcons from "../pages/Icons/RemixIcons";
import MaterialDesign from "../pages/Icons/MaterialDesign";
import DripiIcons from "../pages/Icons/DripiIcons";
import FontAwesome from "../pages/Icons/FontAwesome";

//Utility
import StarterPage from "../pages/Utility/StarterPage";
import Usuarios from "../pages/Usuarios";
import Maintenance from "../pages/Utility/Maintenance";
import CommingSoon from "../pages/Utility/CommingSoon";
import Timeline from "../pages/Utility/Timeline";
import FAQs from "../pages/Utility/FAQs";
import Pricing from "../pages/Utility/Pricing";
import Error404 from "../pages/Utility/Error404";
import Error500 from "../pages/Utility/Error500";

// Forms
import FormElements from "../pages/Forms/FormElements";
import FormAdvanced from "../pages/Forms/FormAdvanced";
import FormEditors from "../pages/Forms/FormEditors";
import FormValidations from "../pages/Forms/FormValidations";
import FormMask from "../pages/Forms/FormMask";
import FormUpload from "../pages/Forms/FormUpload";
import FormWizard from "../pages/Forms/FormWizard";
import FormXeditable from "../pages/Forms/FormXeditable";

//Ui
import UiAlert from "../pages/Ui/UiAlert";
import UiButtons from "../pages/Ui/UiButtons";
import UiCards from "../pages/Ui/UiCards";
import UiCarousel from "../pages/Ui/UiCarousel";
import UiDropdown from "../pages/Ui/UiDropdown";
import UiGeneral from "../pages/Ui/UiGeneral";
import UiGrid from "../pages/Ui/UiGrid";
import UiImages from "../pages/Ui/UiImages";
import UiLightbox from "../pages/Ui/UiLightbox";
import UiModal from "../pages/Ui/UiModal";
import UiProgressbar from "../pages/Ui/UiProgressbar";
import UiSweetAlert from "../pages/Ui/UiSweetAlert";
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions";
import UiTypography from "../pages/Ui/UiTypography";
import UiVideo from "../pages/Ui/UiVideo";
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout";
import UiRating from "../pages/Ui/UiRating";
import UiRangeSlider from "../pages/Ui/UiRangeSlider";
import UiNotifications from "../pages/Ui/ui-notifications";
import UIRoundSlider from "../pages/Ui/UIRoundSlider";

//Tables
import BasicTables from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";
import ResponsiveTables from "../pages/Tables/ResponsiveTables";
import EditableTables from "../pages/Tables/EditableTables";

// Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";

const authProtectedRoutes = [

	// Tables
	{ path: "/basic-tables", component: BasicTables },
	{ path: "/datatable-table", component: DatatableTables },
	{ path: "/responsive-table", component: ResponsiveTables },
	{ path: "/editable-table", component: EditableTables },

	// Ui
	{ path: "/ui-alerts", component: UiAlert },
	{ path: "/ui-buttons", component: UiButtons },
	{ path: "/ui-cards", component: UiCards },
	{ path: "/ui-carousel", component: UiCarousel },
	{ path: "/ui-dropdowns", component: UiDropdown },
	{ path: "/ui-general", component: UiGeneral },
	{ path: "/ui-grid", component: UiGrid },
	{ path: "/ui-images", component: UiImages },
	{ path: "/ui-lightbox", component: UiLightbox },
	{ path: "/ui-modals", component: UiModal },
	{ path: "/ui-progressbars", component: UiProgressbar },
	{ path: "/ui-sweet-alert", component: UiSweetAlert },
	{ path: "/ui-tabs-accordions", component: UiTabsAccordions },
	{ path: "/ui-typography", component: UiTypography },
	{ path: "/ui-video", component: UiVideo },
	{ path: "/ui-session-timeout", component: UiSessionTimeout },
	{ path: "/ui-rating", component: UiRating },
	{ path: "/ui-rangeslider", component: UiRangeSlider },
	{ path: "/ui-notifications", component: UiNotifications },
	{ path: "/ui-roundslider", component: UIRoundSlider },

	// Forms
	{ path: "/form-elements", component: FormElements },
	{ path: "/form-advanced", component: FormAdvanced },
	{ path: "/form-editors", component: FormEditors },
	{ path: "/form-mask", component: FormMask },
	{ path: "/form-file-upload", component: FormUpload },
	{ path: "/form-wizard", component: FormWizard },
	{ path: "/form-validation", component: FormValidations },
	{ path: "/form-xeditable", component: FormXeditable },

	//Utility
	{ path: "/starter", component: StarterPage },
	{ path: "/usuarios", component: Usuarios },
	{ path: "/planoleitura", component: Timeline },
	{ path: "/faqs", component: FAQs },
	{ path: "/pricing", component: Pricing },

	//Icons
	{ path: "/icons-remix", component: RemixIcons },
	{ path: "/material-design", component: MaterialDesign },
	{ path: "/dripicons", component: DripiIcons },
	{ path: "/font-awesome-5", component: FontAwesome },

	{ path: "/dashboard", component: Dashboard },

	{ path: "/perfil", component: Perfil },

	{ path: "/parceiros", component: Parceiros },

	{ path: "/protocolos", component: Protocolos },
	{ path: "/protocolos-doencas", component: ProtocolosDrogas },
	
	{ path: "/drogas", component: Drogas },
	{ path: "/drogas-categorias", component: DrogasCategorias },

	{ path: "/hemoterapia", component: Hemoterapia },
	{ path: "/hemoterapia-opcoes", component: HemoterapiaOpcoes },

	{ path: "/hemoterapia-coleta", component: HemoterapiaColeta },
	{ path: "/hemoterapia-cuidados", component: HemoterapiaCuidados },
	{ path: "/hemoterapia-hemocomponentes", component: HemoterapiaHemocomponentes },
	{ path: "/hemoterapia-reacoes", component: HemoterapiaReacoes },

	{ path: "/procedimentos", component: Procedimentos },
	{ path: "/suporte", component: Suporte },

	{ path: "/hemocomponentes", component: Hemocomponentes },

	{ path: "/cuidados-especiais", component: CuidadosEspeciais },

	{ path: "/reacoes-transfusional", component: ReacoesTransfusionais },

	{ path: "/", exact: true, component: () => <Redirect to="/login" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/esqueci-minha-senha", component: EsqueciMinhaSenha },
	{ path: "/redefinir-senha", component: RedefinirSenha },
	{ path: "/cadastro", component: Register },
	{ path: "/membros", component: CadastroMembros },
	{ path: "/lock-screen", component: AuthLockScreen },

	// Authentication Inner
	{ path: "/auth-login", component: Login1 },
	{ path: "/auth-register", component: Register1 },
	{ path: "/auth-recoverpw", component: ForgetPwd1 },

	{ path: "/maintenance", component: Maintenance },
	{ path: "/comingsoon", component: CommingSoon },
	{ path: "/404", component: Error404 },
	{ path: "/500", component: Error500 },
];

export { authProtectedRoutes, publicRoutes };
