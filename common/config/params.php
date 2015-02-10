<?php
return [
    'adminEmail' => 'admin@example.com',
    'supportEmail' => 'support@example.com',
    'user.passwordResetTokenExpire' => 3600,
    'yandexMoney' => [
        'client_id' => '3065FA5707AB7732DFB81868255DC019ADFDF3657EDAF22A31949B4C683919EF',
        'client_secret' => '40EE73305122945583FA4B52FD838768032ED57F626A4399CEED23CEFAA94BD67296714146265A64784CE81C4A385FB0AFD998548EF937828698ACEF46E6975C',
        'redirect_uri' => 'http://test10.it-yes.com/yandex/result',
        'wallet' => '410012550819268', // Кошелек
    ],
    'pay' => [
        'default_amount' => '0.10', // Сумма пополнения по умолчанию
    ],
    'webMoney' => [
        'wallet' => 'R144674532304',
    ],
    'payeer' => [
        'm_shop' => '28698484',
        'm_curr' => 'RUB',
        'm_desc' => 'Lucfactory',
        'm_key' => '0h8iT8h0VjQz2ZYZ',
    ],
];
