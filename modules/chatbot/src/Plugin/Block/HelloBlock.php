<?php

namespace Drupal\chatbot\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Render\Markup;

/**
 * Provides a 'Chatbot' Block.
 *
 * @Block(
 *   id = "chatbot",
 *   admin_label = @Translation("Chatbot"),
 *   category = @Translation("chatbot"),
 * )
 */

class HelloBlock extends BlockBase
{

  /**
   * {@inheritdoc}
   */
  public function build()
  {
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
