<?php

/**
 * @file
 * Provides basic hello world message functionality.
 */

namespace Drupal\chatbot\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class HelloController.
 *
 * @package Drupal\chatbot\Controller
 */
class HelloController extends ControllerBase {

  /**
   * Say Hello.
   *
   * @return array
   *   Markup.
   */
  public function hello() {
    $render = [];

    $render['test'] = [
      '#theme' => 'chatbot',
      '#title' => 'chatbot',
    ];
    return $render;
  }
}
