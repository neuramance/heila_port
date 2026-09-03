import { expect, test } from '@playwright/test';

test.describe('Heila Shahidi Portfolio Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads successfully with correct title and metadata', async ({ page }) => {
    await expect(page).toHaveTitle(/Heila Shahidi \| AI Software Engineer/);
  });

  test('displays monumental hero name and technical role', async ({ page }) => {
    const nameHeading = page.getByRole('heading', { level: 1 });
    await expect(nameHeading).toBeVisible();
    await expect(nameHeading).toHaveText('Heila Shahidi');

    const roleHeading = page.getByRole('heading', { level: 2 });
    await expect(roleHeading).toBeVisible();
    await expect(roleHeading).toHaveText('AI Software Engineer');
  });

  test('displays technical thesis and competency chips', async ({ page }) => {
    await expect(page.getByText(/Architecting frontier foundation models/i)).toBeVisible();

    await expect(page.getByText('Foundation Models', { exact: true })).toBeVisible();
    await expect(page.getByText('Agentic Cognition', { exact: true })).toBeVisible();
    await expect(page.getByText('Distributed Inference', { exact: true })).toBeVisible();
    await expect(page.getByText('Triton & CUDA Systems', { exact: true })).toBeVisible();
  });

  test('embeds background video with looping and muted attributes', async ({ page }) => {
    const video = page.locator('video');
    await expect(video).toBeAttached();
    await expect(video).toHaveAttribute('src', '/heila_compressed.mp4');
    await expect(video).toHaveAttribute('autoplay', '');
    await expect(video).toHaveAttribute('loop', '');
    await expect(video).toHaveAttribute('playsinline', '');
  });

  test('verifies single page non-scrollable viewport constraints', async ({ page }) => {
    const isOverflowHidden = await page.evaluate(() => {
      const htmlStyle = window.getComputedStyle(document.documentElement);
      const bodyStyle = window.getComputedStyle(document.body);
      return htmlStyle.overflow === 'hidden' && bodyStyle.overflow === 'hidden';
    });
    expect(isOverflowHidden).toBe(true);
  });

  test('interacts with background video controls', async ({ page }) => {
    const pauseButton = page.getByRole('button', {
      name: /pause background video/i,
    });
    await expect(pauseButton).toBeVisible();
    await pauseButton.click();

    await expect(page.getByText('Paused')).toBeVisible();

    const playButton = page.getByRole('button', {
      name: /play background video/i,
    });
    await expect(playButton).toBeVisible();
    await playButton.click();

    await expect(page.getByText('Live Stream')).toBeVisible();
  });

  test('opens and closes technical expertise modal', async ({ page }) => {
    const expertiseButton = page.getByRole('button', { name: /expertise/i });
    await expertiseButton.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(page.getByText('Core AI Disciplines')).toBeVisible();
    await expect(page.getByText(/Neural Architecture & Pretraining/i)).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('copies email on contact button click', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);

    const contactButton = page.getByRole('button', { name: /contact/i });
    await contactButton.click();

    await expect(page.getByText(/Email copied: heila\.shahidi@gmail\.com/i)).toBeVisible();
  });
});
