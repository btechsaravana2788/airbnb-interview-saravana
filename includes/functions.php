<?php

require_once __DIR__ . '/data.php';

function getPropertyById($id)
{
    global $airbnbProperties;

    foreach ($airbnbProperties as $property) {
        if ((int) $property['id'] === (int) $id) {
            return $property;
        }
    }

    return null;
}

function getFilteredProperties($filters = [])
{
    global $airbnbProperties;

    $results = $airbnbProperties;
    $location = strtolower(trim($filters['location'] ?? ''));
    $type = trim($filters['type'] ?? '');
    $guests = (int) ($filters['guests'] ?? 0);
    $price = (int) ($filters['price'] ?? 0);

    if ($location !== '') {
        $results = array_values(array_filter($results, function ($property) use ($location) {
            return str_contains(strtolower($property['location']), $location)
                || str_contains(strtolower($property['country']), $location)
                || str_contains(strtolower($property['title']), $location);
        }));
    }

    if ($type !== '' && $type !== 'Any type') {
        $results = array_values(array_filter($results, function ($property) use ($type) {
            return $property['type'] === $type;
        }));
    }

    if ($guests > 0) {
        $results = array_values(array_filter($results, function ($property) use ($guests) {
            return $property['guests'] >= $guests;
        }));
    }

    if ($price > 0) {
        $results = array_values(array_filter($results, function ($property) use ($price) {
            return $property['price'] <= $price;
        }));
    }

    return $results;
}
