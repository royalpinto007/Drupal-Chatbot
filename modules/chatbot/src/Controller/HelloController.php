<?php

/**
 * @file
 * Provides basic hello world message functionality.
 */

namespace Drupal\chatbot\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Render\Markup;

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
    $build = [];
  
    $build['test'] = [
      '#theme' => 'chatbot',
      '#title' => 'chatbot',
      '#attached' => [
        'library' => [
          'chatbot/chatbot',
        ],
      ],
    ];
    
    return $build;
  }
}
