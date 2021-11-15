<?php

/*
 * This file is part of block-cat/pagination.
 *
 * Copyright (c) 2021 .
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace BlockCat\Pagination;

use Flarum\Extend;
use Flarum\Statistics\AddStatisticsData;
use Flarum\Api\Controller\AbstractSerializeController;
use Flarum\Settings\SettingsRepositoryInterface;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->content(AddStatisticsData::class),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    // (new Extend\ApiController(AbstractSerializeController::class))
    //     ->setLimit(0, function(AbstractSerializeController $controller) {
    //         $settings = resolve(SettingsRepositoryInterface::class);
    //         // getting article limit from settings
    //         $limit = $settings->get('block-cat.article_per_page');

    //         // setting new limit for Discussion page
    //         $controller->setLimit($limit);
    //     }),
    (new Extend\Settings())
        -> serializeToForum('block-cat.articlePerPage', 'block-cat.article_per_page')
        -> serializeToForum('block-cat.paginationPosition', 'block-cat.pagination_position'),
    new Extend\Locales(__DIR__ . '/resources/locale')
];
