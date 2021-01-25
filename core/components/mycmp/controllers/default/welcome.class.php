<?php
class MycmpWelcomeManagerController extends modExtraManagerController {
   public function process(array $scriptProperties = array()) {}
   public function getPageTitle() {
       return 'React CMP';
   }
   public function getTemplateFile() {
       return 'index.html';
   }
}