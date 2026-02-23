package com.fsad.tribalcraft.controller;

import com.fsad.tribalcraft.dto.LoginRequest;
import com.fsad.tribalcraft.dto.RegisterRequest;
import com.fsad.tribalcraft.model.User;
import com.fsad.tribalcraft.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public User register(@Valid @RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@Valid @RequestBody LoginRequest request) {
        User user = authService.login(request);
        return Map.of(
                "message", "Login successful",
                "userId", user.getId(),
                "fullName", user.getFullName(),
                "role", user.getRole(),
                "email", user.getEmail()
        );
    }
}
