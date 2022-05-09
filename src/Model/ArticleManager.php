<?php

namespace App\Model;

class ArticleManager extends AbstractManager
{
    public const TABLE = 'Article';

    public function selectRandomOne()
    {
        // prepared request
        $statement = $this->pdo->query("SELECT * FROM " . static::TABLE .
                    " ORDER BY RAND() LIMIT 1");

        return $statement->fetchAll();
    }
}
