<?php

/**
 * @file
 * Provides basic hello world message functionality.
 */

namespace Drupal\drupalchatbot\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class HelloController.
 *
 * @package Drupal\drupalChatbot\Controller
 */
class HelloController extends ControllerBase {

  /**
   * Say Hello.
   *
   * @return array
   *   Markup.
   */
  public function hello() {
    return ['#markup' => $this->t("Hello World!")];
  }

}
