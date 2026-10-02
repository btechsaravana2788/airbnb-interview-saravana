<?php
require_once __DIR__ . '/includes/functions.php';

$filters = [
    'location' => $_GET['location'] ?? '',
    'type' => $_GET['type'] ?? 'Any type',
    'guests' => $_GET['guests'] ?? 0,
    'price' => $_GET['price'] ?? 400,
];

$properties = getFilteredProperties($filters);
$pageTitle = 'Search stays | Airbnb Clone';
require __DIR__ . '/includes/header.php';
?>

<main class="page-shell">
    <section class="container filters-wrap">
        <form class="filter-bar" method="get" action="listings.php">
            <div class="field-group">
                <label>Location</label>
                <input type="text" name="location" value="<?= htmlspecialchars($filters['location']) ?>" placeholder="Anywhere" />
            </div>
            <div class="field-group">
                <label>Type</label>
                <select name="type">
                    <option>Any type</option>
                    <?php foreach ($propertyTypes as $type): ?>
                        <option value="<?= htmlspecialchars($type) ?>" <?= $filters['type'] === $type ? 'selected' : '' ?>><?= htmlspecialchars($type) ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="field-group">
                <label>Guests</label>
                <select name="guests">
                    <option value="0">Any</option>
                    <option value="2" <?= (int) $filters['guests'] === 2 ? 'selected' : '' ?>>2+</option>
                    <option value="4" <?= (int) $filters['guests'] === 4 ? 'selected' : '' ?>>4+</option>
                    <option value="6" <?= (int) $filters['guests'] === 6 ? 'selected' : '' ?>>6+</option>
                </select>
            </div>
            <div class="field-group">
                <label>Max price</label>
                <input type="number" name="price" min="50" step="10" value="<?= (int) $filters['price'] ?>" />
            </div>
            <button type="submit" class="primary-btn">Apply</button>
        </form>
    </section>

    <section class="container listings-section">
        <div class="section-head inline-head">
            <h2><?= count($properties) ?> stays</h2>
            <span>Popular in your area</span>
        </div>

        <?php if (empty($properties)): ?>
            <div class="empty-state">
                <h3>No results found</h3>
                <p>Try widening your destination or increasing the guest count.</p>
            </div>
        <?php else: ?>
            <div class="property-grid">
                <?php foreach ($properties as $property): ?>
                    <article class="property-card">
                        <a href="property.php?id=<?= (int) $property['id'] ?>" class="card-image-link">
                            <img src="<?= htmlspecialchars($property['image']) ?>" alt="<?= htmlspecialchars($property['title']) ?>" />
                            <?php if ($property['superhost']): ?>
                                <span class="badge">Superhost</span>
                            <?php endif; ?>
                        </a>
                        <div class="card-body">
                            <div class="card-meta">
                                <span><?= htmlspecialchars($property['type']) ?></span>
                                <span>★ <?= htmlspecialchars((string) $property['rating']) ?></span>
                            </div>
                            <h3><a href="property.php?id=<?= (int) $property['id'] ?>"><?= htmlspecialchars($property['title']) ?></a></h3>
                            <p><?= htmlspecialchars($property['location']) ?></p>
                            <div class="card-footer">
                                <strong><?= formatPrice($property['price']) ?></strong>
                                <span><?= (int) $property['guests'] ?> guests</span>
                            </div>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>
