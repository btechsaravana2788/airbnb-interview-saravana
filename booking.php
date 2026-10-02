<?php
require_once __DIR__ . '/includes/functions.php';

$pageTitle = 'Confirm booking | Airbnb Clone';
require __DIR__ . '/includes/header.php';

$property = null;
$checkin = $_POST['checkin'] ?? '';
$checkout = $_POST['checkout'] ?? '';
$guestCount = (int) ($_POST['guests'] ?? 1);

if (!empty($_POST['property_id'])) {
    $property = getPropertyById((int) $_POST['property_id']);
}

$validBooking = $property && $checkin && $checkout && strtotime($checkout) > strtotime($checkin);

if (!$validBooking) {
    echo '<main class="page-shell"><section class="container empty-state"><h3>Booking details missing</h3><p>Please select a property and valid dates before confirming.</p><a class="primary-btn" href="listings.php">Browse stays</a></section></main>';
    require __DIR__ . '/includes/footer.php';
    exit;
}

$nights = (int) ((strtotime($checkout) - strtotime($checkin)) / 86400);
$total = ($property['price'] * $nights) + 54;
?>

<main class="page-shell">
    <section class="container booking-confirmation">
        <div class="confirmation-box">
            <p class="eyebrow">Reservation confirmed</p>
            <h1><?= htmlspecialchars($property['title']) ?></h1>
            <p><?= htmlspecialchars($property['location']) ?></p>

            <div class="summary-grid">
                <div>
                    <span>Check-in</span>
                    <strong><?= htmlspecialchars($checkin) ?></strong>
                </div>
                <div>
                    <span>Check-out</span>
                    <strong><?= htmlspecialchars($checkout) ?></strong>
                </div>
                <div>
                    <span>Guests</span>
                    <strong><?= $guestCount ?></strong>
                </div>
                <div>
                    <span>Nights</span>
                    <strong><?= $nights ?></strong>
                </div>
            </div>

            <div class="booking-summary">
                <div><span>Stay total</span><strong><?= formatPrice($property['price'] * $nights) ?></strong></div>
                <div><span>Service fee</span><strong>$54</strong></div>
                <div class="total"><span>Total</span><strong><?= formatPrice($total) ?></strong></div>
            </div>

            <a class="primary-btn" href="index.php">Back to home</a>
        </div>
    </section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>
