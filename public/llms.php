<?php
// nginx на Beget отдаёт статику сам и не подставляет charset, из-за чего
// кириллица в llms.txt читалась как windows-1251. Поэтому файла llms.txt на
// диске нет: запрос доходит до Apache, .htaccess отправляет его сюда, и
// заголовок с UTF-8 ставит PHP.
header('Content-Type: text/plain; charset=utf-8');
header('Cache-Control: public, max-age=3600');
readfile(__DIR__ . '/llms-data.txt');
