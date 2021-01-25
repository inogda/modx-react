<?php
// Загрузить MODX
require_once dirname(dirname(__FILE__)) . '/config.core.php';
require_once MODX_CORE_PATH . 'model/modx/modx.class.php';
$modx = new modX();
$modx->initialize('web');
$modx->getService('error','error.modError', '', '');

// Загрузить любые классы или пакеты (модели), которые вам потребуются
$modx->addPackage('recipes', MODX_CORE_PATH . 'components/Recipes/model/');
//$path = $modx->getOption('mypackage.core_path', null, $modx->getOption('core_path').'components/mypackage/') . 'model/mypackage/';
//$modx->getService('mypackage', 'myPackage', $path);

// Загрузить класс modRestService и передать ему некоторую базовую конфигурацию
$rest = $modx->getService('rest', 'rest.modRestService', '', array(
   'basePath' => dirname(__FILE__) . '/Controllers/',
   'controllerClassSeparator' => '',
   'controllerClassPrefix' => 'MyController',
   'xmlRootNode' => 'response',
));

// Подготовить запрос
$rest->prepare();
// Удостовериться, что пользователю предоставлены необходимые права доступа; вернуть пользователю ошибку 401 в обратном случае
if (!$rest->checkPermissions()) {
   $rest->sendUnauthorized(true);
}

// Выполнить запрос
$rest->process();
