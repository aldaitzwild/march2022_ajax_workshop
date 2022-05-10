<?php

namespace App\Model;

class ArticleManager extends AbstractManager
{
    public const TABLE = 'Article';

    public function selectRandomOne(): array
    {
        // prepared request
        $statement = $this->pdo->query("SELECT * FROM " . static::TABLE .
                    " ORDER BY RAND() LIMIT 1");

        return $statement->fetch();
    }

    public function selectArticlesByKeywords(string $keywords): array
    {
        $query = "SELECT * FROM " . self::TABLE . " WHERE title like CONCAT('%', :keywords, '%');";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':keywords', $keywords, \PDO::PARAM_STR);
        $statement->execute();

        return $statement->fetchAll();
    }
}
