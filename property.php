<?php
require_once __DIR__ . '/includes/functions.php';

$id = $_GET['id'] ?? 1;
$property = getPropertyById($id);

if (!$property) {
    header('Location: listings.php');
    exit;
}

$pageTitle = $property['title'] . ' | Airbnb Clone';
require __DIR__ . '/includes/header.php';
?>

<main class="page-shell">
    <section class="container property-hero">
        <div class="property-heading">
            <p class="eyebrow">Entire <?= htmlspecialchars($property['type']) ?></p>
            <h1><?= htmlspecialchars($property['title']) ?></h1>
            <div class="property-topline">
                <span>★ <?= htmlspecialchars((string) $property['rating']) ?> (<?= (int) $property['reviews'] ?> reviews)</span>
                <span><?= htmlspecialchars($property['location']) ?></span>
            </div>
        </div>
    </section>

    <section class="container gallery-grid">
        <?php foreach ($property['gallery'] as $index => $image): ?>
            <div class="gallery-item <?= $index === 0 ? 'featured-image' : '' ?>">
                <img src="<?= htmlspecialchars($image) ?>" alt="<?= htmlspecialchars($property['title']) ?> image <?= (int) ($index + 1) ?>" />
            </div>
        <?php endforeach; ?>
    </section>

    <section class="container property-layout">
        <div class="property-content">
            <div class="host-panel">
                <div>
                    <p class="eyebrow">Hosted by <?= htmlspecialchars($property['host']) ?></p>
                    <h2><?= (int) $property['guests'] ?> guests · <?= (int) $property['beds'] ?> beds · <?= (int) $property['baths'] ?> baths</h2>
                </div>
                <div class="host-badge"><?= $property['superhost'] ? 'Superhost' : 'Top-rated' ?></div>
            </div>

            <div class="description-box">
                <h3>About this place</h3>
                <p><?= htmlspecialchars($property['description']) ?></p>
            </div>

            <div class="amenities-box">
                <h3>Amenities</h3>
                <ul class="amenity-list">
                    <?php foreach ($property['amenities'] as $amenity): ?>
                        <li><?= htmlspecialchars($amenity) ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>

        <aside class="booking-card">
            <div class="price-row">
                <h3><?= formatPrice($property['price']) ?></h3>
                <span>for 2 nights</span>
            </div>

            <form method="post" action="booking.php">
                <input type="hidden" name="property_id" value="<?= (int) $property['id'] ?>">
                <div class="booking-grid">
                    <label>
                        Check-in
                        <input type="date" name="checkin" required>
                    </label>
                    <label>
                        Check-out
                        <input type="date" name="checkout" required>
                    </label>
                </div>
                <label>
                    Guests
                    <select name="guests">
                        <?php for ($i = 1; $i <= (int) $property['guests']; $i++): ?>
                            <option value="<?= $i ?>"><?= $i ?> guest<?= $i > 1 ? 's' : '' ?></option>
                        <?php endfor; ?>
                    </select>
                </label>
                <button type="submit" class="primary-btn full-width">Reserve</button>
            </form>

            <div class="booking-summary">
                <div><span>Subtotal</span><strong><?= formatPrice($property['price'] * 2) ?></strong></div>
                <div><span>Service fee</span><strong>$54</strong></div>
                <div class="total"><span>Total</span><strong><?= formatPrice($property['price'] * 2 + 54) ?></strong></div>
            </div>
        </aside>
    </section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>
